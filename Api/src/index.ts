import app from "./app";
import "./db";

app.listen(4000, () => {
  console.log("server on port", app.get("port"));
});
