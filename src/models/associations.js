import { CP } from './cp.js';
import { TiposDePlanes } from './tiposPlanes.js';
import { SeccionCotizar } from './seccionCotizar.js';
import { CountryCode } from './countryCode.js';
import { CPR } from './cpr.js';
import { Clientes } from './clients.js';

export const setupAssociations = () => {
    // Asociación entre SeccionCotizar y CP
    SeccionCotizar.belongsTo(CP, { foreignKey: 'CP', as: 'cp_details' });
    CP.hasOne(SeccionCotizar, { foreignKey: 'CP', as: 'cp_details' });

    // Asociación entre SeccionCotizar y TiposDePlanes
    SeccionCotizar.belongsTo(TiposDePlanes, { foreignKey: 'tipo_de_plan', targetKey: 'id_plan', as: 'plan_details' });
    TiposDePlanes.hasOne(SeccionCotizar, { foreignKey: 'tipo_de_plan', sourceKey: 'id_plan', as: 'plan_details' });

    // Asociación entre SeccionCotizar y CPR
    SeccionCotizar.hasOne(CPR, { foreignKey: 'id_prospecto', as: 'cpr_details' });
    CPR.belongsTo(SeccionCotizar, { foreignKey: 'id_prospecto', as: 'prospect_details' });

    // Asociación entre CPR y CountryCode
    CPR.belongsTo(CountryCode, { foreignKey: 'fifa', as: 'country_details' });
    CountryCode.hasMany(CPR, { foreignKey: 'fifa', as: 'cpr_list' });

    // Asociación entre Clientes y CP
    Clientes.belongsTo(CP, { foreignKey: 'cp', as: 'cp_details' });
    CP.hasMany(Clientes, { foreignKey: 'cp', as: 'client_list' });

    // Asociación entre Clientes y TiposDePlanes
    Clientes.belongsTo(TiposDePlanes, { foreignKey: 'tipo_de_plan', targetKey: 'id_plan', as: 'plan_details' });
    TiposDePlanes.hasMany(Clientes, { foreignKey: 'tipo_de_plan', sourceKey: 'id_plan', as: 'client_list' });
};
