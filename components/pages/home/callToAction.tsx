import React, { FunctionComponent } from "react";

type CallToActionProps = {
    children: React.ReactNode;
};

const CallToAction: FunctionComponent<CallToActionProps> = ({
    children
}) => {

  return (
    <div className={`flex flex-row flex-wrap gap-5 items-center justify-center py-12`}>
        { children }
    </div>
  );
};
export default CallToAction;


