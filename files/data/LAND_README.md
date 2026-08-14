# 台湾耕地所有权与经营状况调查数据集（1950）

## 数据概况

本数据集数字化整理自1950年《耕地之所有与经营状况调查报告书》。三张扁平表具有相同的317个地方记录，包括19个县市或管理局合计、43个区合计和255个乡镇级记录。地理名称与行政层级按报告原有结构整理；`locality_raw` 保留工作表中的中英文原始名称。

主要内容包括：

- 水田、旱地以及自耕农、佃农的经营面积；
- 私有耕地所有者按持有面积分组的人数和百分比；
- 公有耕地按登记类别、地目和放租状态划分的面积。

面积变量沿用原报告的“甲”，所有者面积组沿用原表所列公顷区间，百分比采用0—100尺度。

## 文件结构

- `data/1950_cultivated_land_by_tenure.csv`：按经营身份和地目划分的耕地面积。
- `data/1950_private_landowners_by_holding_size.csv`：私有耕地所有者的持有面积分组。
- `data/1950_public_cultivated_land.csv`：公有耕地的登记类别与放租状态。
- `source_workbooks/`：保留修订记录、算术校对说明和待复核项目的工作簿。
- `metadata.yaml`：双语数据集元数据。
- `CODEBOOK.md`：变量说明。

## 数据质量说明

经营面积表经人工校对，修正了已知错误。原始扫描PDF未包含在本发布包中。

## Citation

Liu, Yaxuan (2026). *From Land to Liquidity: Compensation Design and Local Population Reallocation in Taiwan’s Land-to-the-Tiller Reform*. Work in Progress.

## English summary

This package contains three locality-level tables digitized from the 1950 Survey Report on Cultivated Land Ownership and Operation. Each table contains 317 reported localities at county/city, district, and township levels. The reviewed source workbooks are included so users can audit name corrections, arithmetic corrections, and unresolved items. License and download URL are intentionally left blank pending publication.
