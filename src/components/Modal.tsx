import React from "react";

interface Notification {
  messenger: string;
  type: "success" | "warning" | "danger";
}

export default function Modal({ messenger, type }: Notification) {
  return (
    <>
      <div className={`alert alert-${type}`} role="alert" id="mnotification">
        {messenger}
      </div>
    </>
  );
}
