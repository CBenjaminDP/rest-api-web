import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CountryCode = sequelize.define(
  "country_codes",
  {
    FIFA: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    dial: {
      type: DataTypes.STRING(10),
    },
    ISO3166_1_Alpha_3: {
      type: DataTypes.STRING(3),
    },
    MARC: {
      type: DataTypes.STRING(10),
    },
    is_independent: {
      type: DataTypes.BOOLEAN,
    },
    ISO3166_1_numeric: {
      type: DataTypes.INTEGER,
    },
    GAUL: {
      type: DataTypes.STRING(10),
    },
    FIPS: {
      type: DataTypes.STRING(10),
    },
    WMO: {
      type: DataTypes.STRING(10),
    },
    ISO3166_1_Alpha_2: {
      type: DataTypes.STRING(2),
    },
    ITU: {
      type: DataTypes.STRING(10),
    },
    IOC: {
      type: DataTypes.STRING(10),
    },
    DS: {
      type: DataTypes.STRING(10),
    },
    UNTERM_SPANISH_FORMAL: {
      type: DataTypes.STRING(255),
    },
    GLOBAL_CODE: {
      type: DataTypes.STRING(10),
    },
    INTERMEDIATE_REGION_CODE: {
      type: DataTypes.STRING(10),
    },
    OFFICIAL_NAME_FR: {
      type: DataTypes.STRING(255),
    },
    UNTERM_FRENCH_SHORT: {
      type: DataTypes.STRING(255),
    },
    ISO4217_currency_name: {
      type: DataTypes.STRING(255),
    },
    Developed_Developing_Countries: {
      type: DataTypes.STRING(50),
    },
    UNTERM_RUSSIAN_FORMAL: {
      type: DataTypes.STRING(255),
    },
    UNTERM_English_Short: {
      type: DataTypes.STRING(255),
    },
    ISO4217_currency_alphabetic_code: {
      type: DataTypes.STRING(3),
    },
    Small_Island_Developing_States_SIDS: {
      type: DataTypes.STRING(50),
    },
    UNTERM_SPANISH_SHORT: {
      type: DataTypes.STRING(255),
    },
    ISO4217_currency_numeric_code: {
      type: DataTypes.INTEGER,
    },
    UNTERM_CHINESE_FORMAL: {
      type: DataTypes.STRING(255),
    },
    UNTERM_FRENCH_FORMAL: {
      type: DataTypes.STRING(255),
    },
    UNTERM_RUSSIAN_SHORT: {
      type: DataTypes.STRING(255),
    },
    M49: {
      type: DataTypes.STRING(10),
    },
    SUB_REGION_CODE: {
      type: DataTypes.STRING(10),
    },
    REGION_CODE: {
      type: DataTypes.STRING(10),
    },
    OFFICIAL_NAME_AR: {
      type: DataTypes.STRING(255),
    },
    ISO4217_currency_minor_unit: {
      type: DataTypes.STRING(10),
    },
    UNTERM_ARABIC_FORMAL: {
      type: DataTypes.STRING(255),
    },
    UNTERM_CHINESE_SHORT: {
      type: DataTypes.STRING(255),
    },
    Land_Locked_Developing_Countries_LLDC: {
      type: DataTypes.STRING(50),
    },
    INTERMEDIATE_REGION_NAME: {
      type: DataTypes.STRING(255),
    },
    OFFICIAL_NAME_ES: {
      type: DataTypes.STRING(255),
    },
    UNTERM_ENGLISH_FORMAL: {
      type: DataTypes.STRING(255),
    },
    OFFICIAL_NAME_CN: {
      type: DataTypes.STRING(255),
    },
    OFFICIAL_NAME_EN: {
      type: DataTypes.STRING(255),
    },
    ISO4217_currency_country_name: {
      type: DataTypes.STRING(255),
    },
    Least_Developed_Countries_LDC: {
      type: DataTypes.STRING(50),
    },
    REGION_NAME: {
      type: DataTypes.STRING(255),
    },
    UNTERM_ARABIC_SHORT: {
      type: DataTypes.STRING(255),
    },
    SUB_REGION_NAME: {
      type: DataTypes.STRING(255),
    },
    OFFICIAL_REGION_NAME: {
      type: DataTypes.STRING(255),
    },
    GLOBAL_NAME: {
      type: DataTypes.STRING(255),
    },
    CAPITAL: {
      type: DataTypes.STRING(255),
    },
    CONTINENT: {
      type: DataTypes.STRING(255),
    },
    TLD: {
      type: DataTypes.STRING(10),
    },
    LANGUAGES: {
      type: DataTypes.STRING(255),
    },
    GEONAME_ID: {
      type: DataTypes.INTEGER,
    },
    CLDR_DISPLAY_NAME: {
      type: DataTypes.STRING(255),
    },
    EDGAR: {
      type: DataTypes.STRING(10),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
