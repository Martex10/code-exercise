import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const useAxios = ({ url }) => {
  // states for api statuses
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get(url)
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  //trigger get request when url is updated
  useEffect(() => {
    fetchData();
  }, [url]);

  return [response, error, loading];
};

useAxios.propTypes = {
  url: PropTypes.string.isRequired,
};

export default useAxios;
