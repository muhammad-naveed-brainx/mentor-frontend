import styles from "./add.module.scss";
import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Add = (props) => {
  const [formData, setFormData] = useState({});
  const {
    slug,
    url,
    columns,
    setOpen,
    setAddType,
    setAddedItem,
    data,
    btnLabel,
    addType,
    subjId,
  } = props;
  console.log(subjId);

  let queryKey;
  if (subjId) queryKey = ["subject", subjId, "questions"];
  if (addType === "subject")
    queryKey = ["class", data.academic_class_id, "subjects"];
  else if (addType === "chapter")
    queryKey = ["subject", data.academic_subject_id, "chapters"];
  else if (addType === "class") queryKey = ["allClass"];

  console.log("QueryKey", queryKey);
  useEffect(() => {
    // Merge incomingData with the current state using spread operator
    setFormData((prevData) => ({
      ...prevData,
      ...data,
    }));
  }, [data]);
  const handleInputChange = (event, field) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };

  // TEST THE API

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(url, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    },
    onSuccess: () => {
      setAddedItem(`${slug} added`);
      queryClient.invalidateQueries(queryKey);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(url);
    console.log(data);
    //add new item
    mutation.mutate();
    console.log("Form Data:", formData);
    typeof setAddType === "function" && setAddType("");
    setOpen(false);
  };
  return (
    <div className={styles.add}>
      <div className={styles.modal}>
        <span
          className={styles.close}
          onClick={() => {
            document.body.style.overflow = "auto";
            setOpen(false);
            typeof setAddType === "function" && setAddType("");
          }}
        >
          X
        </span>
        <h1> {btnLabel ? `Update ${slug}` : `Add new ${slug}`}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter(
              (item) => !item.field.endsWith("id") && item.field !== "img"
            )
            .map((column) => (
              <div className={styles.item}>
                <label>{column.headerName}</label>
                {column.isTextArea ? (
                  <textarea
                    required={column.required}
                    type={column.type}
                    placeholder={column.headerName}
                    value={formData[column.field] || ""}
                    onChange={(event) => handleInputChange(event, column.field)}
                    rows={4}
                    cols={50}
                  />
                ) : (
                  <input
                    required={column.required}
                    type={column.type}
                    placeholder={column.headerName}
                    value={formData[column.field] || ""}
                    onChange={(event) => handleInputChange(event, column.field)}
                  />
                )}
              </div>
            ))}
          <button
            onClick={() => {
              document.body.style.overflow = "auto";
            }}
          >
            {btnLabel || "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
