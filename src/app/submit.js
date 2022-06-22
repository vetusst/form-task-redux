import axios from "axios";
import { reset } from "redux-form";
import { store } from "../store/store";
import { NotificationActions } from "../store/NotificationSlice";

export default (async function handleSubmit(values) {
  const data = {
    ...values,
    ...(values.no_of_slices && { no_of_slices: Number(values.no_of_slices) }),
    ...(values.diameter && { diameter: Number(values.diameter) }),
    ...(values.spiciness_scale && {
      spiciness_scale: Number(values.spiciness_scale),
    }),
    ...(values.slices_of_bread && {
      slices_of_bread: Number(values.slices_of_bread),
    }),
    preparation_time: values.preparation_time.toLocaleTimeString("pl-EU"),
  };

  console.log(data);



  axios
    .post("https://frosty-wood-6558.getsandbox.com:443/dishes", data)
    .then((res) => {
      store.dispatch(
        NotificationActions.createNotification({
          message: "Successfully sent the order!",
          type: "success",
        })
      );
      store.dispatch(reset("order"));
    }).catch(err => {
      store.dispatch(
        NotificationActions.createNotification({
          message: "Error! Order wasn't sent",
          type: "error",
        })
      );
    });
});
