import { CountryCode } from "../models/CountryCode.js";

// Obtener todos los códigos de país
export const getCountryCodes = async (req, res) => {
  try {
    const countryCodes = await CountryCode.findAll();
    res.json(countryCodes);
  } catch (error) {
    console.error("Error getting all country codes:", error);
    res.status(500).json({ message: "Error getting all country codes", error });
  }
};

// Obtener un código de país por su FIFA
export const getOneCountryCode = async (req, res) => {
  try {
    const { FIFA } = req.params;
    const countryCode = await CountryCode.findByPk(FIFA);
    if (countryCode) {
      res.json(countryCode);
    } else {
      res.status(404).json({ message: "Country code not found" });
    }
  } catch (error) {
    console.error("Error getting the country code:", error);
    res.status(500).json({ message: "Error getting the country code", error });
  }
};

// Crear un nuevo código de país
export const createCountryCode = async (req, res) => {
  try {
    const {
      FIFA,
      dial,
      ISO3166_1_Alpha_3,
      MARC,
      is_independent,
      ISO3166_1_numeric,
      GAUL,
      FIPS,
      WMO,
      ISO3166_1_Alpha_2,
      ITU,
      IOC,
      DS,
      UNTERM_SPANISH_FORMAL,
      GLOBAL_CODE,
      INTERMEDIATE_REGION_CODE,
      OFFICIAL_NAME_FR,
      UNTERM_FRENCH_SHORT,
      ISO4217_currency_name,
      Developed_Developing_Countries,
      UNTERM_RUSSIAN_FORMAL,
      UNTERM_English_Short,
      ISO4217_currency_alphabetic_code,
      Small_Island_Developing_States_SIDS,
      UNTERM_SPANISH_SHORT,
      ISO4217_currency_numeric_code,
      UNTERM_CHINESE_FORMAL,
      UNTERM_FRENCH_FORMAL,
      UNTERM_RUSSIAN_SHORT,
      M49,
      SUB_REGION_CODE,
      REGION_CODE,
      OFFICIAL_NAME_AR,
      ISO4217_currency_minor_unit,
      UNTERM_ARABIC_FORMAL,
      UNTERM_CHINESE_SHORT,
      Land_Locked_Developing_Countries_LLDC,
      INTERMEDIATE_REGION_NAME,
      OFFICIAL_NAME_ES,
      UNTERM_ENGLISH_FORMAL,
      OFFICIAL_NAME_CN,
      OFFICIAL_NAME_EN,
      ISO4217_currency_country_name,
      Least_Developed_Countries_LDC,
      REGION_NAME,
      UNTERM_ARABIC_SHORT,
      SUB_REGION_NAME,
      OFFICIAL_REGION_NAME,
      GLOBAL_NAME,
      CAPITAL,
      CONTINENT,
      TLD,
      LANGUAGES,
      GEONAME_ID,
      CLDR_DISPLAY_NAME,
      EDGAR,
    } = req.body;

    const newCountryCode = await CountryCode.create({
      FIFA,
      dial,
      ISO3166_1_Alpha_3,
      MARC,
      is_independent,
      ISO3166_1_numeric,
      GAUL,
      FIPS,
      WMO,
      ISO3166_1_Alpha_2,
      ITU,
      IOC,
      DS,
      UNTERM_SPANISH_FORMAL,
      GLOBAL_CODE,
      INTERMEDIATE_REGION_CODE,
      OFFICIAL_NAME_FR,
      UNTERM_FRENCH_SHORT,
      ISO4217_currency_name,
      Developed_Developing_Countries,
      UNTERM_RUSSIAN_FORMAL,
      UNTERM_English_Short,
      ISO4217_currency_alphabetic_code,
      Small_Island_Developing_States_SIDS,
      UNTERM_SPANISH_SHORT,
      ISO4217_currency_numeric_code,
      UNTERM_CHINESE_FORMAL,
      UNTERM_FRENCH_FORMAL,
      UNTERM_RUSSIAN_SHORT,
      M49,
      SUB_REGION_CODE,
      REGION_CODE,
      OFFICIAL_NAME_AR,
      ISO4217_currency_minor_unit,
      UNTERM_ARABIC_FORMAL,
      UNTERM_CHINESE_SHORT,
      Land_Locked_Developing_Countries_LLDC,
      INTERMEDIATE_REGION_NAME,
      OFFICIAL_NAME_ES,
      UNTERM_ENGLISH_FORMAL,
      OFFICIAL_NAME_CN,
      OFFICIAL_NAME_EN,
      ISO4217_currency_country_name,
      Least_Developed_Countries_LDC,
      REGION_NAME,
      UNTERM_ARABIC_SHORT,
      SUB_REGION_NAME,
      OFFICIAL_REGION_NAME,
      GLOBAL_NAME,
      CAPITAL,
      CONTINENT,
      TLD,
      LANGUAGES,
      GEONAME_ID,
      CLDR_DISPLAY_NAME,
      EDGAR,
    });

    res.json(newCountryCode);
  } catch (error) {
    console.error("Error creating country code:", error);
    res.status(500).json({ message: "Error creating country code", error });
  }
};

// Actualizar un código de país existente
export const updateCountryCode = async (req, res) => {
  try {
    const { FIFA } = req.params;
    const {
      dial,
      ISO3166_1_Alpha_3,
      MARC,
      is_independent,
      ISO3166_1_numeric,
      GAUL,
      FIPS,
      WMO,
      ISO3166_1_Alpha_2,
      ITU,
      IOC,
      DS,
      UNTERM_SPANISH_FORMAL,
      GLOBAL_CODE,
      INTERMEDIATE_REGION_CODE,
      OFFICIAL_NAME_FR,
      UNTERM_FRENCH_SHORT,
      ISO4217_currency_name,
      Developed_Developing_Countries,
      UNTERM_RUSSIAN_FORMAL,
      UNTERM_English_Short,
      ISO4217_currency_alphabetic_code,
      Small_Island_Developing_States_SIDS,
      UNTERM_SPANISH_SHORT,
      ISO4217_currency_numeric_code,
      UNTERM_CHINESE_FORMAL,
      UNTERM_FRENCH_FORMAL,
      UNTERM_RUSSIAN_SHORT,
      M49,
      SUB_REGION_CODE,
      REGION_CODE,
      OFFICIAL_NAME_AR,
      ISO4217_currency_minor_unit,
      UNTERM_ARABIC_FORMAL,
      UNTERM_CHINESE_SHORT,
      Land_Locked_Developing_Countries_LLDC,
      INTERMEDIATE_REGION_NAME,
      OFFICIAL_NAME_ES,
      UNTERM_ENGLISH_FORMAL,
      OFFICIAL_NAME_CN,
      OFFICIAL_NAME_EN,
      ISO4217_currency_country_name,
      Least_Developed_Countries_LDC,
      REGION_NAME,
      UNTERM_ARABIC_SHORT,
      SUB_REGION_NAME,
      OFFICIAL_REGION_NAME,
      GLOBAL_NAME,
      CAPITAL,
      CONTINENT,
      TLD,
      LANGUAGES,
      GEONAME_ID,
      CLDR_DISPLAY_NAME,
      EDGAR,
    } = req.body;

    const countryCode = await CountryCode.findByPk(FIFA);
    if (!countryCode) {
      return res.status(404).json({ message: "Country code not found" });
    }

    countryCode.dial = dial || countryCode.dial;
    countryCode.ISO3166_1_Alpha_3 =
      ISO3166_1_Alpha_3 || countryCode.ISO3166_1_Alpha_3;
    countryCode.MARC = MARC || countryCode.MARC;
    countryCode.is_independent =
      is_independent !== undefined
        ? is_independent
        : countryCode.is_independent;
    countryCode.ISO3166_1_numeric =
      ISO3166_1_numeric || countryCode.ISO3166_1_numeric;
    countryCode.GAUL = GAUL || countryCode.GAUL;
    countryCode.FIPS = FIPS || countryCode.FIPS;
    countryCode.WMO = WMO || countryCode.WMO;
    countryCode.ISO3166_1_Alpha_2 =
      ISO3166_1_Alpha_2 || countryCode.ISO3166_1_Alpha_2;
    countryCode.ITU = ITU || countryCode.ITU;
    countryCode.IOC = IOC || countryCode.IOC;
    countryCode.DS = DS || countryCode.DS;
    countryCode.UNTERM_SPANISH_FORMAL =
      UNTERM_SPANISH_FORMAL || countryCode.UNTERM_SPANISH_FORMAL;
    countryCode.GLOBAL_CODE = GLOBAL_CODE || countryCode.GLOBAL_CODE;
    countryCode.INTERMEDIATE_REGION_CODE =
      INTERMEDIATE_REGION_CODE || countryCode.INTERMEDIATE_REGION_CODE;
    countryCode.OFFICIAL_NAME_FR =
      OFFICIAL_NAME_FR || countryCode.OFFICIAL_NAME_FR;
    countryCode.UNTERM_FRENCH_SHORT =
      UNTERM_FRENCH_SHORT || countryCode.UNTERM_FRENCH_SHORT;
    countryCode.ISO4217_currency_name =
      ISO4217_currency_name || countryCode.ISO4217_currency_name;
    countryCode.Developed_Developing_Countries =
      Developed_Developing_Countries ||
      countryCode.Developed_Developing_Countries;
    countryCode.UNTERM_RUSSIAN_FORMAL =
      UNTERM_RUSSIAN_FORMAL || countryCode.UNTERM_RUSSIAN_FORMAL;
    countryCode.UNTERM_English_Short =
      UNTERM_English_Short || countryCode.UNTERM_English_Short;
    countryCode.ISO4217_currency_alphabetic_code =
      ISO4217_currency_alphabetic_code ||
      countryCode.ISO4217_currency_alphabetic_code;
    countryCode.Small_Island_Developing_States_SIDS =
      Small_Island_Developing_States_SIDS ||
      countryCode.Small_Island_Developing_States_SIDS;
    countryCode.UNTERM_SPANISH_SHORT =
      UNTERM_SPANISH_SHORT || countryCode.UNTERM_SPANISH_SHORT;
    countryCode.ISO4217_currency_numeric_code =
      ISO4217_currency_numeric_code ||
      countryCode.ISO4217_currency_numeric_code;
    countryCode.UNTERM_CHINESE_FORMAL =
      UNTERM_CHINESE_FORMAL || countryCode.UNTERM_CHINESE_FORMAL;
    countryCode.UNTERM_FRENCH_FORMAL =
      UNTERM_FRENCH_FORMAL || countryCode.UNTERM_FRENCH_FORMAL;
    countryCode.UNTERM_RUSSIAN_SHORT =
      UNTERM_RUSSIAN_SHORT || countryCode.UNTERM_RUSSIAN_SHORT;
    countryCode.M49 = M49 || countryCode.M49;
    countryCode.SUB_REGION_CODE =
      SUB_REGION_CODE || countryCode.SUB_REGION_CODE;
    countryCode.REGION_CODE = REGION_CODE || countryCode.REGION_CODE;
    countryCode.OFFICIAL_NAME_AR =
      OFFICIAL_NAME_AR || countryCode.OFFICIAL_NAME_AR;
    countryCode.ISO4217_currency_minor_unit =
      ISO4217_currency_minor_unit || countryCode.ISO4217_currency_minor_unit;
    countryCode.UNTERM_ARABIC_FORMAL =
      UNTERM_ARABIC_FORMAL || countryCode.UNTERM_ARABIC_FORMAL;
    countryCode.UNTERM_CHINESE_SHORT =
      UNTERM_CHINESE_SHORT || countryCode.UNTERM_CHINESE_SHORT;
    countryCode.Land_Locked_Developing_Countries_LLDC =
      Land_Locked_Developing_Countries_LLDC ||
      countryCode.Land_Locked_Developing_Countries_LLDC;
    countryCode.INTERMEDIATE_REGION_NAME =
      INTERMEDIATE_REGION_NAME || countryCode.INTERMEDIATE_REGION_NAME;
    countryCode.OFFICIAL_NAME_ES =
      OFFICIAL_NAME_ES || countryCode.OFFICIAL_NAME_ES;
    countryCode.UNTERM_ENGLISH_FORMAL =
      UNTERM_ENGLISH_FORMAL || countryCode.UNTERM_ENGLISH_FORMAL;
    countryCode.OFFICIAL_NAME_CN =
      OFFICIAL_NAME_CN || countryCode.OFFICIAL_NAME_CN;
    countryCode.OFFICIAL_NAME_EN =
      OFFICIAL_NAME_EN || countryCode.OFFICIAL_NAME_EN;
    countryCode.ISO4217_currency_country_name =
      ISO4217_currency_country_name ||
      countryCode.ISO4217_currency_country_name;
    countryCode.Least_Developed_Countries_LDC =
      Least_Developed_Countries_LDC ||
      countryCode.Least_Developed_Countries_LDC;
    countryCode.REGION_NAME = REGION_NAME || countryCode.REGION_NAME;
    countryCode.UNTERM_ARABIC_SHORT =
      UNTERM_ARABIC_SHORT || countryCode.UNTERM_ARABIC_SHORT;
    countryCode.SUB_REGION_NAME =
      SUB_REGION_NAME || countryCode.SUB_REGION_NAME;
    countryCode.OFFICIAL_REGION_NAME =
      OFFICIAL_REGION_NAME || countryCode.OFFICIAL_REGION_NAME;
    countryCode.GLOBAL_NAME = GLOBAL_NAME || countryCode.GLOBAL_NAME;
    countryCode.CAPITAL = CAPITAL || countryCode.CAPITAL;
    countryCode.CONTINENT = CONTINENT || countryCode.CONTINENT;
    countryCode.TLD = TLD || countryCode.TLD;
    countryCode.LANGUAGES = LANGUAGES || countryCode.LANGUAGES;
    countryCode.GEONAME_ID = GEONAME_ID || countryCode.GEONAME_ID;
    countryCode.CLDR_DISPLAY_NAME =
      CLDR_DISPLAY_NAME || countryCode.CLDR_DISPLAY_NAME;
    countryCode.EDGAR = EDGAR || countryCode.EDGAR;

    await countryCode.save();

    res.json(countryCode);
  } catch (error) {
    console.error("Error updating country code:", error);
    res.status(500).json({ message: "Error updating country code", error });
  }
};

// Eliminar un código de país
export const deleteCountryCode = async (req, res) => {
  try {
    const { FIFA } = req.params;

    const countryCode = await CountryCode.findByPk(FIFA);
    if (!countryCode) {
      return res.status(404).json({ message: "Country code not found" });
    }

    await countryCode.destroy();

    res.json({ message: "Country code deleted successfully" });
  } catch (error) {
    console.error("Error deleting country code:", error);
    res.status(500).json({ message: "Error deleting country code", error });
  }
};
