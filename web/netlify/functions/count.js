import Visit from "@/db/models/Visit";

exports.handler = async function (event, context) {
  try {
    const result = await Visit.findAll({
      limit: 1,
      order: [["createdAt", "DESC"]],
    });

    if (result.length === 0) {
      throw new Error("Can't find last count.");
    }

    const visit = result[0];
    const count = visit.count;

    visit.count = visit.count + 1;
    await visit.save();
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, data: { count } }),
    };
  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify({ success: false, message: err.message }),
    };
  }
};
