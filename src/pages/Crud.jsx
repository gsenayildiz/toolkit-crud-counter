import { Button, ButtonGroup, Container, Stack, Table } from "react-bootstrap";
import FormModal from "../components/FormModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";


const Crud = () => {
   const { isDarkTheme } = useSelector((store) => store.crudReducer);
   const { tasks } =  useSelector((store) => store.crudReducer);
  // console.log(state);
    const [isOpen, setIsOpen] = useState(false);
    const [editItem, setIsEditItem] = useState(null);
   const dispatch = useDispatch();
  return (
    <div>
        <Container> 
      <Stack className="align-items-center my-4">
        <Button onClick={() => setIsOpen(true)}>
            Yeni Görev Ekle
        </Button>
      </Stack>

      <Table 
      responsive 
      bordered 
      hover 
      striped 
      variant ={isDarkTheme ? "light" : "dark"} >
       <thead>
        <tr>
            <th>#</th>
            <th>Görev</th>
            <th>Yazan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
        </tr>
       </thead>
       <tbody>
        {tasks.map((task, i) => (
            <tr key={task.id}>
                <td>{i} </td>
                <td>{task.title} </td>
                <td>{task.author} </td>
                <td>{task.assigned_to} </td>
                <td>{task.end_date} </td>
                <td>
                    <ButtonGroup size="sm">
                        <Button onClick={() => { 
                           setIsEditItem(task);
                           setIsOpen(true);
                        }}>Düzenle</Button>
                        <Button variant="danger" onClick={() => dispatch(deleteTask(task.id))}>Sil</Button>
                    </ButtonGroup>
                </td>
            </tr>
        ))}
       </tbody>
     </Table>

      <FormModal editItem={editItem} isOpen={isOpen} handleClose={() =>{ setIsOpen(false); 
        setIsEditItem(null)}} />
      </Container>
    </div>
  )
}

export default Crud;
