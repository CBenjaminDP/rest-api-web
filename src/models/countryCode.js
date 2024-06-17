import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const CountryCode = sequelize.define(
  "country_codes",
  {
    fifa: {
      type: DataTypes.STRING(10),
      primaryKey: true,
    },
    dial: {
      type: DataTypes.STRING(10),
    },
    iso3166_1_alpha: {
      type: DataTypes.STRING(3),
    },
    marc: {
      type: DataTypes.STRING(10),
    },
    is_independent: {
      type: DataTypes.BOOLEAN,
    },
    iso3166_1_numeric: {
      type: DataTypes.STRING(10),
    },
    gaul: {
      type: DataTypes.STRING(10),
    },
    fips: {
      type: DataTypes.STRING(10),
    },
    wmo: {
      type: DataTypes.STRING(10),
    },
    iso3166_1_alpha_2: {
      type: DataTypes.STRING(2),
    },
    itu: {
      type: DataTypes.STRING(10),
    },
    ioc: {
      type: DataTypes.STRING(10),
    },
    ds: {
      type: DataTypes.STRING(10),
    },
    unterm_spanish_formal: {
      type: DataTypes.STRING(255),
    },
    global_code: {
      type: DataTypes.STRING(10),
    },
    intermediate_region_code: {
      type: DataTypes.STRING(10),
    },
    official_name_fr: {
      type: DataTypes.STRING(255),
    },
    unterm_french_short: {
      type: DataTypes.STRING(255),
    },
    iso4217_currency_name: {
      type: DataTypes.STRING(255),
    },
    developed_developing_countries: {
      type: DataTypes.STRING(50),
    },
    unterm_russian_formal: {
      type: DataTypes.STRING(255),
    },
    unterm_english_short: {
      type: DataTypes.STRING(255),
    },
    iso4217_currency_alphabetic_code: {
      type: DataTypes.STRING(10),
    },
    small_island_developing_states_sids: {
      type: DataTypes.BOOLEAN,
    },
    unterm_spanish_short: {
      type: DataTypes.STRING(255),
    },
    iso4217_currency_numeric_code: {
      type: DataTypes.STRING(10),
    },
    unterm_chinese_formal: {
      type: DataTypes.STRING(255),
    },
    unterm_french_formal: {
      type: DataTypes.STRING(255),
    },
    unterm_russian_short: {
      type: DataTypes.STRING(255),
    },
    m49: {
      type: DataTypes.STRING(10),
    },
    sub_region_code: {
      type: DataTypes.STRING(10),
    },
    region_code: {
      type: DataTypes.STRING(10),
    },
    official_name_ar: {
      type: DataTypes.STRING(255),
    },
    iso4217_currency_minor_unit: {
      type: DataTypes.STRING(10),
    },
    unterm_arabic_formal: {
      type: DataTypes.STRING(255),
    },
    unterm_chinese_short: {
      type: DataTypes.STRING(255),
    },
    land_locked_developing_countries_lldc: {
      type: DataTypes.BOOLEAN,
    },
    intermediate_region_name: {
      type: DataTypes.STRING(255),
    },
    official_name_es: {
      type: DataTypes.STRING(255),
    },
    unterm_english_formal: {
      type: DataTypes.STRING(255),
    },
    official_name_cn: {
      type: DataTypes.STRING(255),
    },
    official_name_en: {
      type: DataTypes.STRING(255),
    },
    iso4217_currency_country_name: {
      type: DataTypes.STRING(255),
    },
    least_developed_countries_ldc: {
      type: DataTypes.BOOLEAN,
    },
    region_name: {
      type: DataTypes.STRING(255),
    },
    unterm_arabic_short: {
      type: DataTypes.STRING(255),
    },
    sub_region_name: {
      type: DataTypes.STRING(255),
    },
    official_name_ru: {
      type: DataTypes.STRING(255),
    },
    global_name: {
      type: DataTypes.STRING(255),
    },
    capital: {
      type: DataTypes.STRING(255),
    },
    continent: {
      type: DataTypes.STRING(50),
    },
    tld: {
      type: DataTypes.STRING(10),
    },
    languages: {
      type: DataTypes.STRING(255),
    },
    geoname_id: {
      type: DataTypes.STRING(10),
    },
    cldr_display_name: {
      type: DataTypes.STRING(255),
    },
    edgar: {
      type: DataTypes.STRING(10),
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
