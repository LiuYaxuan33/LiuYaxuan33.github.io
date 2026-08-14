# Codebook

## Main panel

文件：`data/taiwan_household_registration_population_panel_1947_1958.csv`

| Variable | 中文说明 | English description |
|---|---|---|
| `year` | 公历年份，1947—1958 | Calendar year, 1947–1958 |
| `unit_id` | 1950年土地报告单位的唯一标识 | Unique identifier for the 1950 land-reporting unit |
| `unit_label` | 1950年土地报告单位名称 | Name of the 1950 land-reporting unit |
| `parent_j_code` | 对应的日治时期固定历史单位代码 | Identifier of the corresponding fixed historical unit |
| `county_1955` | 按1955年前后口径统一的县级组 | Harmonized county-level group around 1955 |
| `historical_town` | 对应的日治时期街庄名称 | Corresponding Japanese-period town or village name |
| `population_total` | 总人口；面板的主要人口变量 | Total population; the main population measure |
| `log_population_total` | 总人口的自然对数 | Natural logarithm of total population |
| `male_population` | 男性人口；原表未报告时为空 | Male population; blank when unavailable in the source |
| `female_population` | 女性人口；原表未报告时为空 | Female population; blank when unavailable in the source |
| `unit_definition` | 单位构造方式，见下方取值说明 | Rule used to construct the analysis unit |
| `population_units` | 合并该条记录时使用的来源地理单位标识 | Source locality or localities aggregated into the record |
| `population_basis` | 原始来源的人口统计口径 | Population concept used by the source |
| `population_scope` | 对原表人口范围的补充说明 | Additional description of the population scope |
| `source_file` | 项目内人口来源文件路径 | Path of the population source file within the research project |
| `source_url` | 原始资料网址；未知时为空 | Source URL; blank when unavailable |
| `source_table_type` | 来源表或整理流程类型 | Type of source table or processing stream |
| `source_description` | 来源及合并方式的文字说明 | Description of the source and aggregation method |

### `unit_definition` values

| Value | 中文说明 | English description |
|---|---|---|
| `historical_jcode_aggregate` | 以固定历史街庄为母单位合并人口 | Population aggregated to a fixed historical locality |
| `1950_land_report_unit_split` | 1950年土地表已分别报告处理值，因而保留为独立乡镇单位 | Township retained separately because the 1950 land report provides a distinct land record |

## Unit dictionary

文件：`data/unit_dictionary.csv`。每个 `unit_id` 一行，集中列示单位名称、县级组、历史街庄、构造方式及来源人口单位。

## Source inventory

文件：`data/source_inventory.csv`。

| Variable | 中文说明 | English description |
|---|---|---|
| `source_file` | 项目内来源文件路径 | Source-file path within the project |
| `source_url` | 来源网址；未知时为空 | Source URL; blank when unavailable |
| `source_table_type` | 来源或整理流程类型 | Source or processing type |
| `source_description` | 来源说明 | Source description |
| `first_year` | 该来源在面板中的最早年份 | Earliest panel year represented by the source |
| `last_year` | 该来源在面板中的最晚年份 | Latest panel year represented by the source |
| `observation_count` | 该来源贡献的单位—年份观测数 | Number of year-unit observations contributed by the source |
