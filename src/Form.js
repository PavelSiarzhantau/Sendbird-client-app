import React from "react";

export function Form({ changeHandler, submit }) {
  return (
    <div className="ticket-form-container">
      <div className="ticket-form-container_section__header">Create Ticket</div>

      <div className="ticket-form-container_section">
        <div>Name:</div>
        <input
          type="text"
          name="email"
          onChange={(e) => changeHandler("name", e.target.value)}
        />
      </div>

      <div className="ticket-form-container_section">
        <div>Email:</div>
        <input
          type="text"
          name="email"
          onChange={(e) => changeHandler("email", e.target.value)}
        />
      </div>

      <div className="ticket-form-container_section">
        <div>Subject:</div>
        <input
          type="text"
          name="subject"
          onChange={(e) => changeHandler("subject", e.target.value)}
        />
      </div>

      <div className="ticket-form-container_section">
        <div>Description:</div>
        <textarea
          onChange={(e) => changeHandler("description", e.target.value)}
        />
      </div>

      <div className="ticket-form-container_section">
        <div onClick={submit} className="ticket-form-container_section__button">
          Create
        </div>
      </div>
    </div>
  );
}
