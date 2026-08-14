---
layout: default
title: "台湾户籍人口面板数据集 README"
permalink: /data/registration-readme/
---
<article class="container narrow dataset-document" markdown="1">

<p class="dataset-document-back"><a href="{{ '/data/' | relative_url }}"><span class="lang-zh">← 返回数据页</span><span class="lang-en">← Back to Data</span></a></p>

# 台湾户籍人口面板数据集（1947—1958）

## 数据概况

本数据集是一个以“年份×1950年土地报告单位”为观测单位的不平衡地区人口面板，不是逐户或个人层面的追踪数据，也不含个人身份信息。样本覆盖1947—1958年、237个处理单位和16个县级组，共2542条单位—年份观测。

地理范围包括台北县、宜兰县、桃园县、新竹县、苗栗县、台中县、彰化县、南投县、云林县、嘉义县、台南县、高雄县、屏东县、花莲县、台东县及阳明山管理区。单列省辖市与澎湖不在本面板中。

## 文件结构

- `data/taiwan_household_registration_population_panel_1947_1958.csv`：主面板。
- `data/unit_dictionary.csv`：237个分析单位的名称、上级历史代码及单位构造方式。
- `data/source_inventory.csv`：人口资料来源清单及其年份范围和观测数。
- `metadata.yaml`：双语数据集元数据。
- `CODEBOOK.md`：变量说明。

## 年度覆盖

| Year | Observations |
|---:|---:|
| 1947 | 148 |
| 1948 | 149 |
| 1949 | 154 |
| 1950 | 205 |
| 1951 | 237 |
| 1952 | 237 |
| 1953 | 227 |
| 1954 | 237 |
| 1955 | 237 |
| 1956 | 237 |
| 1957 | 237 |
| 1958 | 237 |

人口资料来自各县市统计年报、统计要览、地方户政历年表、地方志及《台湾省户籍统计要览》。`population_total` 是各年统一使用的主要结果变量；男女人口仅在原表提供时录入。

CSV 采用 UTF-8 with BOM。

## Citation

Liu, Yaxuan (2026). *Taiwan Household Registration Population Panel Dataset (1947–1958)*, v1.0.

## English summary

This is an unbalanced locality-level population panel, not a household- or individual-level longitudinal dataset. It contains 2,542 year-unit observations for 237 units from 1947 to 1958. Record-level fields document the population concept, source file, URL when available, source type, and aggregation used to align population records with the 1950 land-reporting geography. License and download URL are intentionally left blank pending publication.

</article>
