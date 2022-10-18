import {
  BarChartOutlined,
  EditOutlined,
  FullscreenExitOutlined,
  HistoryOutlined,
  IssuesCloseOutlined,
  // SnippetsOutlined,
} from '@ant-design/icons';
import { Button, Col, Drawer, Row, Space, Tabs, Tooltip, message } from 'antd';
import React, { memo, useEffect, useState } from 'react';
import { useIntl } from 'umi';

import ChartList from '../ChartList';
import LogViewer from '@/components/LogViewer/indexLog';
// import MarkdownViewer from '../MarkdownViewer';
import PlotlyViewer from '@/components/PlotlyViewer/indexClass';
import HistoryTable from '../HistoryTable';
import { JsonViewer } from '@textea/json-viewer'

import { getFile } from '../../services/StatEngine';
import type { ChartResult } from '../ChartList/data';
import type { PlotlyChart } from '@/components/PlotlyViewer/data';
import type { StatEngineAPI } from '../../services/typings'

import './index.less';
import { langData } from './lang';

const { TabPane } = Tabs;

export type ResultPanelProps = {
  onClickItem: (chart: string, result?: ChartResult, task?: StatEngineAPI.TaskListItem) => void;
  taskId: string;
  logLink: string;
  results: string[];
  charts: string[];
  currentChart: string | null;
  responsiveKey: number | string;
};

type UIContext = Record<string, any>;

const ResultPanel: React.FC<ResultPanelProps> = (props) => {
  const intl = useIntl();

  const uiContext: UIContext = {};
  Object.keys(langData).forEach((key) => {
    uiContext[key] = intl.formatMessage(langData[key]);
  });

  const { onClickItem, logLink, responsiveKey, currentChart, taskId, results, charts } = props;

  const [chartTask, setChartTask] = useState<StatEngineAPI.TaskListItem | undefined>(undefined);
  const [plotlyEditorMode, setPlotlyEditorMode] = useState<string>('Plotly');
  const [chartsVisible, setChartsVisible] = useState<boolean>(false);
  const [editBtnActive, setEditBtnActive] = useState<boolean>(false);
  const [historyVisible, setHistoryVisible] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>("chart");

  const [plotlyData, setPlotlyData] = useState<PlotlyChart | null>(null);

  useEffect(() => {
    if (charts.length > 0) {
      console.log('Chart Task: ', taskId);
      getFile({ filelink: charts[0] }).then((response: any) => {
        setPlotlyData({
          data: response.data,
          layout: response.layout,
          frames: response.frames || undefined
        });
      }).catch(error => {
        message.warn("Cannot fetch the result, please retry later.")
      });
    }
  }, [results, charts]);

  useEffect(() => {
    if (logLink.length > 0) {
      setEditBtnActive(true);
    } else {
      setEditBtnActive(false);
    }
  }, [logLink]);

  const resultOperations = (
    <Space>
      <Tooltip title="Edit the Chart">
        <Button
          disabled={!editBtnActive}
          style={activeKey === 'chart' ? {} : { display: 'none' }}
          type="primary"
          icon={<EditOutlined />}
          onClick={() => {
            setPlotlyEditorMode('PlotlyEditor');
          }}
        >
          {uiContext.edit}
        </Button>
      </Tooltip>
      <Tooltip title="List all charts">
        <Button
          style={{ display: 'none' }}
          onClick={() => {
            setChartsVisible(true);
          }}
          icon={<BarChartOutlined />}
        >
          {uiContext.charts}
        </Button>
      </Tooltip>
      <Tooltip title="List all history">
        <Button
          onClick={() => {
            setHistoryVisible(true);
          }}
          icon={<HistoryOutlined />}
        >
          {uiContext.history}
        </Button>
      </Tooltip>
    </Space>
  );

  console.log('ResultPanel updated');

  return (
    <Row className="result-panel">
      <Tabs
        onChange={(activeKey) => { setActiveKey(activeKey) }}
        activeKey={activeKey}
        className="tabs-result"
        tabBarExtraContent={resultOperations}>
        <TabPane
          tab={
            <span>
              <BarChartOutlined />
              {uiContext.figure}
            </span>
          }
          key="chart"
        >
          <Col
            id="graph-container"
            className={`result-container
        ${plotlyEditorMode === 'PlotlyEditor' ? 'full-screen' : 'no-full-screen'}`}
          >
            {plotlyEditorMode === 'PlotlyEditor' ? (
              <Button
                className="exit-editor"
                onClick={() => {
                  setPlotlyEditorMode('Plotly');
                }}
              >
                <FullscreenExitOutlined />
                Exit Editor
              </Button>
            ) : null}
            <PlotlyViewer
              responsiveKey={responsiveKey}
              plotlyData={plotlyData}
              key={charts[0]}
              mode={plotlyEditorMode}
            ></PlotlyViewer>
          </Col>
        </TabPane>
        <TabPane
          tab={
            <span>
              <IssuesCloseOutlined />
              {uiContext.log}
            </span>
          }
          key="log"
        >
          <LogViewer height="calc(100vh - 200px)" url={logLink} />
        </TabPane>
        {chartTask ? (<TabPane
          tab={
            <span>
              <IssuesCloseOutlined />
              {uiContext.metadata}
            </span>
          }
          key="metadata"
        >
          <JsonViewer value={chartTask} />
        </TabPane>) : null}
      </Tabs>
      <Drawer
        title="Chart Store"
        placement="right"
        closable
        width="70%"
        onClose={() => {
          setChartsVisible(false);
        }}
        visible={chartsVisible}
      >
        <ChartList
          onClickItem={(chart, result) => {
            onClickItem(chart.short_name, result);
            setChartsVisible(false);
          }}
        ></ChartList>
      </Drawer>

      <Drawer
        title="Chart History"
        placement="right"
        closable
        width="70%"
        onClose={() => {
          setHistoryVisible(false);
        }}
        visible={historyVisible}
      >
        <HistoryTable
          forceUpdateKey={`${historyVisible}`}
          pluginName={currentChart || undefined}
          onClickItem={(chart_name: any, result: any, task: any) => {
            onClickItem(chart_name, result, task);
            setHistoryVisible(false);
            setChartTask(task)
          }}
        ></HistoryTable>
      </Drawer>
    </Row>
  );
};

export default memo(ResultPanel);
