import React from "react";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [noteObj, setNoteObj] = React.useState({
    title: "",
    content: ""
  });

  const [focus, setFocus] = React.useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNoteObj((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function handleFocus() {
    setFocus(!focus);
  }

  function collapse(){
    setFocus(false);
  }

  function submitNote(event) {
    props.onAdd(noteObj);
    event.preventDefault();
    setNoteObj({
      title: "",
      content: ""
    });
    collapse();
  }

  return (
    <div>
      <form className="create-note">
        {focus && (
            <input
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={noteObj.title}
              autoFocus={true}
            />
        )}
            <textarea
              name="content"
              placeholder="Take a note..."
              rows={focus ? 3 : 1}
              onChange={handleChange}
              value={noteObj.content}
              onFocus={focus ? null : handleFocus}
            />

        <Zoom in={focus}>
          <Fab onClick={submitNote}>
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
