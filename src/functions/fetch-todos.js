const supabase = require('../database/supabase');

exports.handler = async function (event, context, callback) {
  let { data, status, error } = await supabase.from('todos').select('*');

  let response;
  if (status !== 200 || error) {
    response = {
      statuCode: 500,
      body: JSON.stringify({
        error: "Something went wrong, please try again later",
      }),
    };
  } else {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  callback(null, response);
};
