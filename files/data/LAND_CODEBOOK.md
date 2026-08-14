# Codebook

## Shared locality fields

| Variable | 中文说明 | English description |
|---|---|---|
| `source_excel_row` | 对应发布工作簿正式数据表中的原始行号 | Row number in the released source workbook |
| `record_level` | 记录层级：县市合计、区合计或乡镇 | Record level: county/city total, district total, or township |
| `county_1950` | 1950年报告中的县、市或管理局 | County, city, or administrative authority in the 1950 report |
| `district_1950` | 1950年报告中的区；不适用时为空 | District in the 1950 report; blank when not applicable |
| `locality_1950` | 标准化后的地方名称 | Standardized locality name |
| `locality_raw` | 工作簿中的原始中英文地方名称 | Original Chinese/English locality label in the workbook |

## `1950_cultivated_land_by_tenure.csv`

所有面积变量以甲为单位；百分比变量采用0—100尺度。

| Variable | 中文说明 | English description |
|---|---|---|
| `cultivated_area_total_jia` | 耕地总面积 | Total cultivated area |
| `paddy_area_total_jia` | 水田总面积 | Total paddy-field area |
| `dryland_area_total_jia` | 旱地总面积 | Total dryland area |
| `owner_cultivator_area_total_jia` | 自耕农经营总面积 | Total area operated by owner-cultivators |
| `owner_cultivator_paddy_jia` | 自耕农经营水田面积 | Paddy area operated by owner-cultivators |
| `owner_cultivator_dryland_jia` | 自耕农经营旱地面积 | Dryland area operated by owner-cultivators |
| `tenant_area_total_jia` | 佃农经营总面积 | Total area operated by tenants |
| `tenant_paddy_jia` | 佃农经营水田面积 | Paddy area operated by tenants |
| `tenant_dryland_jia` | 佃农经营旱地面积 | Dryland area operated by tenants |
| `owner_cultivator_share_total_pct` | 全部耕地中自耕农经营面积百分比 | Owner-cultivator share of total cultivated area |
| `tenant_share_total_pct` | 全部耕地中佃农经营面积百分比 | Tenant share of total cultivated area |
| `owner_cultivator_share_paddy_pct` | 水田中自耕农经营面积百分比 | Owner-cultivator share of paddy area |
| `tenant_share_paddy_pct` | 水田中佃农经营面积百分比 | Tenant share of paddy area |
| `owner_cultivator_share_dryland_pct` | 旱地中自耕农经营面积百分比 | Owner-cultivator share of dryland area |
| `tenant_share_dryland_pct` | 旱地中佃农经营面积百分比 | Tenant share of dryland area |

## `1950_private_landowners_by_holding_size.csv`

`owners_total` 为所有者总数。其余 `owners_*` 变量为相应公顷区间内的所有者人数，后缀 `_pct` 表示该组占所有者总数的百分比（0—100）。区间命名规则如下：`lt_0_5ha` 为不足0.5公顷，`0_5_to_lt_1ha` 为0.5至不足1公顷，依此类推，`ge_100ha` 为100公顷及以上。

`owners_total` is the total number of private landowners. Other `owners_*` variables contain counts in the named hectare interval; variables ending in `_pct` contain the corresponding percentage of all owners on a 0–100 scale.

## `1950_public_cultivated_land.csv`

下列变量均以甲为单位，每个类别均进一步区分 `total`、`paddy` 和 `dryland`：

| Prefix | 中文说明 | English description |
|---|---|---|
| `public_*` | 公有耕地总面积 | All public cultivated land |
| `registered_*` | 已登记公有耕地 | Registered public cultivated land |
| `unregistered_*` | 未登记公有耕地 | Non-registered public cultivated land |
| `river_*` | 河川地 | River land |
| `educational_*` | 学产地 | Land for educational purposes |
| `leased_public_*` | 已放租公有耕地 | Public cultivated land leased out |
| `unleased_public_*` | 未放租公有耕地 | Public cultivated land not leased out |

例如，`leased_public_dryland_jia` 表示已放租公有旱地面积，`registered_paddy_jia` 表示已登记公有水田面积。原表横线在CSV中编码为数值0；真正缺失的单元格保留为空。
