import { useDrag, useDrop } from "react-dnd";

const Ongoing = ({item}) => {
    // const {_id} = item;
    // console.log(_id);
    const [{ isOver }, drop] = useDrop(() => ({
    accept: "Task",
    drop: (items) => addItemToSection(items._id),
    collect: (monitor) => ({
        isOver: !!monitor.isOver()
    })
  }))

  const addItemToSection = id => {
    console.log('drop' ,id);
  }

    return (
        <div ref={drop} className="h-20">
            <h2>Todo is</h2>
        </div>
    );
};

export default Ongoing;