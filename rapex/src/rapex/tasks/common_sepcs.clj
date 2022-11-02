(ns rapex.tasks.common-sepcs
  (:require [clojure.spec.alpha :as s]))

(s/def ::datatype #{"fpkm" "tpm" "counts"})
(s/def ::method #{"t.test" "wilcox.test" "anova" "kruskal.test"})
(s/def ::log_scale boolean?)
(s/def ::jitter_size number?)
(s/def ::position #{"dodge" "stack" "fill"})
(s/def ::dataset (s/and string? #(some? (re-matches #"[0-9]+" %))))