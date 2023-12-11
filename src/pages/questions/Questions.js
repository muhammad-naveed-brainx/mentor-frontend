import { useState } from "react";
import Dropdown from "../../components/dropdown/Dropdown";
import styles from "./questions.module.scss";
import { useEffect } from "react";
import {
  getClasses,
  getSubjects,
  getChapters,
  getQuestions,
} from "../../data/api";
import DataTable from "../../components/dataTable/DataTable";
import {
  mcqsColumns,
  classColumns,
  baseURL,
  subjectColumns,
  storeChapterCol,
  blankColumns,
  shortColumns,
  longColumns,
} from "../../data/data";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";
import useClasses from "../../hooks/useClasses";
import useSubjects from "../../hooks/useSubjects";
import useChapters from "../../hooks/useChapters";
import useQuestions from "../../hooks/useQuestions";

const Questions = () => {
  //Fetch data and send to Single Component
  const [open, setOpen] = useState(false);
  const [addType, setAddType] = useState("");
  const [addedItem, setAddedItem] = useState("");

  const [selectedClassId, setSelectedClassId] = useState();

  const [selectedSubjId, setSelectedSubjId] = useState();
  const [addSubjData, setAddSubjData] = useState({});

  const [selectedChapterId, setSelectedChapterId] = useState();
  const [addChapterData, setAddChapterData] = useState();

  const [addMcqsData, setAddMcqsData] = useState({});

  const { data: classes } = useClasses();
  const { data: subjects } = useSubjects(selectedClassId);
  const { data: chapters } = useChapters(selectedSubjId);
  const { data: questions } = useQuestions(selectedSubjId);
  const chapterQuestions = questions?.filter(
    (question) => question.chapter_id == selectedChapterId
  );

  const mcqsQuestions = chapterQuestions?.filter(
    (question) => question.type == "multiple_choice"
  );

  const blankQuestions = chapterQuestions?.filter(
    (question) => question.type == "blank"
  );

  const shortQuestions = chapterQuestions?.filter(
    (question) => question.type == "short_question"
  );

  const longQuestions = chapterQuestions?.filter(
    (question) => question.type == "long_question"
  );

  const handleClassChange = (e) => {
    let id = e.currentTarget.value;
    if (id == 0) {
      setAddType("class");
    } else {
      setSelectedClassId(id);
      if (selectedChapterId !== undefined) setSelectedChapterId(undefined);
      if (selectedSubjId !== undefined) setSelectedSubjId(undefined);
    }
  };

  const handleSubjectChange = (e) => {
    let id = e.currentTarget.value;
    if (id == 0 && selectedClassId !== 0 && selectedClassId) {
      setAddSubjData({
        academic_class_id: selectedClassId,
      });
      setAddType("subject");
    } else {
      setSelectedChapterId(null);
      setSelectedSubjId(id);
    }
  };

  const handleChapterChange = (e) => {
    let id = e.currentTarget.value;
    if (id == 0 && selectedSubjId !== 0 && selectedSubjId) {
      setAddChapterData({
        academic_subject_id: selectedSubjId,
      });
      setAddType("chapter");
    } else {
      setSelectedChapterId(id);
    }
  };

  return (
    <div>
      <h1>Questions</h1>
      <hr />
      <div className={styles.topBar}>
        <Dropdown
          label="Classes"
          value={selectedClassId}
          options={classes}
          onChange={handleClassChange}
          onClick={() => setOpen(true)}
        />

        <Dropdown
          label="Subjects"
          value={selectedSubjId}
          options={subjects}
          onChange={handleSubjectChange}
        />

        <Dropdown
          label="Chapters"
          value={selectedChapterId}
          options={chapters}
          onChange={handleChapterChange}
        />
      </div>
      {selectedChapterId ? (
        <>
          <div className={styles.info}>
            <h2>MCQS</h2>
            <button
              onClick={() => {
                if (selectedChapterId && selectedChapterId !== 0) {
                  {
                    setAddMcqsData({
                      chapter_id: selectedChapterId,
                      type: "multiple_choice",
                    });
                    setAddType("mcqs");
                  }
                } else alert("Please choose a chapter first...");
              }}
            >
              Add New
            </button>
          </div>
          <DataTable
            slug="questions"
            columns={mcqsColumns}
            rows={mcqsQuestions}
            setAddedItem={setAddedItem}
          />
          <hr />
          {/* Here I'll show all the fill in the blank questions.  */}
          <div className={styles.info}>
            <h2>Fill In The Blanks</h2>
            <button
              onClick={() => {
                if (selectedChapterId && setSelectedChapterId !== 0) {
                  {
                    setAddMcqsData({
                      chapter_id: selectedChapterId,
                      type: "blank",
                    });
                    setAddType("blanks");
                    setOpen(true);
                  }
                } else alert("Please choose a chapter first...");
              }}
            >
              Add New
            </button>
          </div>
          <DataTable
            slug="questions"
            columns={blankColumns}
            rows={blankQuestions}
            setAddedItem={setAddedItem}
          />
          <hr />
          {/* Here I'll show all the fill in the Short questions.  */}
          <div className={styles.info}>
            <h2>Short Questions</h2>
            <button
              onClick={() => {
                if (selectedChapterId && setSelectedChapterId !== 0) {
                  {
                    setAddMcqsData({
                      chapter_id: selectedChapterId,
                      type: "short_question",
                    });
                    setAddType("short_question");
                    setOpen(true);
                  }
                } else alert("Please choose a chapter first...");
              }}
            >
              Add New
            </button>
          </div>
          <DataTable
            slug="questions"
            columns={longColumns}
            rows={shortQuestions}
            setAddedItem={setAddedItem}
          />
          <hr />
          {/* Here I'll show all the fill in the Long questions.  */}
          <div className={styles.info}>
            <h2>Long Questions</h2>
            <button
              onClick={() => {
                if (selectedChapterId && setSelectedChapterId !== 0) {
                  {
                    setAddMcqsData({
                      chapter_id: selectedChapterId,
                      type: "long_question",
                    });
                    setAddType("long_question");
                    setOpen(true);
                  }
                } else alert("Please choose a chapter first...");
              }}
            >
              Add New
            </button>
          </div>
          <DataTable
            slug="questions"
            columns={longColumns}
            rows={longQuestions}
            setAddedItem={setAddedItem}
          />
        </>
      ) : (
        <>
          <p>Please choose class subject and then chapter</p>
        </>
      )}

      <>
        {addType === "mcqs" && (
          <Add
            subjId={selectedSubjId}
            addType={addType}
            slug="mcqs"
            columns={mcqsColumns}
            setOpen={setOpen}
            setAddType={setAddType}
            setAddedItem={setAddedItem}
            url={baseURL + "/questions"}
            data={addMcqsData}
          />
        )}
        {addType === "long_question" && (
          <Add
            subjId={selectedSubjId}
            addType={addType}
            slug="long"
            columns={longColumns}
            setOpen={setOpen}
            setAddType={setAddType}
            setAddedItem={setAddedItem}
            url={baseURL + "/questions"}
            data={addMcqsData}
          />
        )}
        {addType === "short_question" && (
          <Add
            subjId={selectedSubjId}
            addType={addType}
            slug="short"
            columns={shortColumns}
            setOpen={setOpen}
            setAddType={setAddType}
            setAddedItem={setAddedItem}
            url={baseURL + "/questions"}
            data={addMcqsData}
          />
        )}
        {addType === "blanks" && (
          <Add
            subjId={selectedSubjId}
            addType={addType}
            slug="blanks"
            columns={blankColumns}
            setOpen={setOpen}
            setAddType={setAddType}
            setAddedItem={setAddedItem}
            url={baseURL + "/questions"}
            data={addMcqsData}
          />
        )}
        {addType === "class" && (
          <Add
            addType={addType}
            slug="Class"
            columns={classColumns}
            setOpen={setOpen}
            setAddType={setAddType}
            setAddedItem={setAddedItem}
            url={baseURL + "/academic-classes"}
            data={{}}
          />
        )}

        {addType === "subject" && (
          <Add
            addType={addType}
            slug="Subject"
            columns={subjectColumns}
            setOpen={setOpen}
            setAddType={setAddType}
            setAddedItem={setAddedItem}
            url={baseURL + "/academic-subjects"}
            data={addSubjData}
          />
        )}
        {addType === "chapter" && (
          <Add
            addType={addType}
            slug="Chapter"
            columns={storeChapterCol}
            setOpen={setOpen}
            setAddType={setAddType}
            setAddedItem={setAddedItem}
            url={baseURL + "/chapters"}
            data={addChapterData}
          />
        )}
      </>
    </div>
  );
};

export default Questions;
