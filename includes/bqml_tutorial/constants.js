const date = new Date();
const execution_time = date.getTime();
const penguins_model_simple_name = "penguins_model";
const penguins_model_versioned_name = `${dataform.projectConfig.defaultDatabase}.${dataform.projectConfig.defaultSchema}.${penguins_model_simple_name}_${execution_time}`;

module.exports = { execution_time, penguins_model_simple_name, penguins_model_versioned_name};
