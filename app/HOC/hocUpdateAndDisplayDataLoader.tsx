import axios from "axios";
import { useActionState, useEffect, useState } from "react";

const toCapital = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export function hocUpdateAndDisplayDataLoader(
  Component: React.FC,
  resourceUrl: string,
  resourceName: string
) {
  return (props: any) => {
    const [initialResource, setInitialResource] = useState(null);
    const [resource, setResource] = useState(null);
    useEffect(() => {
      (async () => {
        const response = await axios.get(resourceUrl);
        setInitialResource(response.data);
        setResource(response.data);
      })();
    }, []);

    const onChange = (updates: any) => {
      setResource(updates);
    };

    const onPost = async () => {
      const response = await axios.post(resourceUrl, {
        [resourceName]: resource,
      });
      setInitialResource(response.data);
      setResource(response.data);
    };

    const onReset = () => {
      setResource(initialResource);
    };

    const resourceProps = {
      [resourceName]: resource,
      [`onChange${toCapital(resourceName)}`]: onChange,
      [`onPost${toCapital(resourceName)}`]: onPost,
      [`onReset${toCapital(resourceName)}`]: onReset,
    };
    return <Component {...props} {...resourceProps} />;
  };
}
