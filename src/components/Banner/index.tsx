import { Layout } from "./Layout";
import { useProps } from "./useProps";

export const Banner = () => {
  return <Layout {...useProps()} />;
};
