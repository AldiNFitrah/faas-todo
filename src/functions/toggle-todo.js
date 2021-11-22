import supabase from "../database/supabase";

exports.handler = async function (event, context, callback) {
  const { body } = event;
  const { id } = JSON.parse(body);

  const { data, status, error } = await supabase
    .from("todos")
    .update({ is_done: "NOT `is_done`" })
    .match("id", id);

  let response;
  if (!String(status).startsWith("2") || error) {
    response = {
      statuCode: 500,
      body: JSON.stringify({
        error: "Something went wrong, please try again later",
      }),
    };
  } else {
    response = {
      statusCode: status,
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
