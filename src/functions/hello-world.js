import supabase from '../database/supabase';

exports.handler = async function (event, context, callback) {
  let result = await supabase.from('todos').select('*');
  var response = {
    statusCode: 200,
    body: JSON.stringify({
      ...result,
    }),
  };
  callback(null, response);
};
