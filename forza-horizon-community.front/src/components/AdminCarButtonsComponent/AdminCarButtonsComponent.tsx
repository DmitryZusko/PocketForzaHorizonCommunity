import { Category, Factory, TimeToLeave } from "@mui/icons-material";
import { Button, Container } from "@mui/material";
import { AccessRole } from "../constants";
import { RoleGate } from "../gates";
import { styles } from "./styles";
import { useAdminCarButtonsComponent } from "./useAdminCarButtonsComponent";

const AdminCarButtonsComponent = () => {
  const { isDesktop, handleAddCar, handleAddManufacture, handleAddCarType } =
    useAdminCarButtonsComponent();
  return (
    <RoleGate accessRoles={[AccessRole.admin]}>
      <Container sx={styles.outerContainer}>
        <Button startIcon={<TimeToLeave />} variant="contained" onClick={handleAddCar}>
          {isDesktop && "Add Car"}
        </Button>
        <Button startIcon={<Factory />} variant="contained" onClick={handleAddManufacture}>
          {isDesktop && "Add Manufacture"}
        </Button>
        <Button startIcon={<Category />} variant="contained" onClick={handleAddCarType}>
          {isDesktop && "Add Car Type"}
        </Button>
      </Container>
    </RoleGate>
  );
};

export default AdminCarButtonsComponent;
