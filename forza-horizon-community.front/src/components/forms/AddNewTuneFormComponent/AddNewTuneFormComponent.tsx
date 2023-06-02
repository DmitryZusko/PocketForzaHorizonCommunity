import { Autocomplete, Box, Divider, Grid, TextField, Typography } from "@mui/material";
import { useAddNewTuneFormComponent } from "./useAddNewTuneFormComponent";
import { SparePartSelectComponent } from "./components";
import {
  AntiRollBarsType,
  AspirationType,
  baseTheme,
  BrakesType,
  ClutchType,
  DifferentialType,
  DisplacementType,
  EngineType,
  ExhaustType,
  IgnitionType,
  IntakeType,
  RollCageType,
  SuspensionType,
  TiresCompoundType,
  TiresWidthType,
  TrackWidthType,
  TransmissionType,
} from "@/components/constants";
import { PatternFormat } from "react-number-format";
import { styles } from "./styles";
import { FormButtonGroupComponent } from "@/components/FormButtonGroupComponent";

const AddNewTuneFormComponent = () => {
  const { formik, autocompleteOptions, handleCancel } = useAddNewTuneFormComponent();
  return (
    <Grid container padding={baseTheme.spacing(7)} maxWidth="100vw">
      <Grid item xs={12}>
        <TextField
          fullWidth
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
      </Grid>
      <Grid item xs={4}>
        <PatternFormat
          name="sharecode"
          label={"Forza Share Code"}
          format={"### ### ###"}
          placeholder="777 777 777"
          value={formik.values.forzaShareCode}
          onChange={(e) => {
            formik.setFieldValue("forzaShareCode", e.target.value);
          }}
          onBlur={formik.handleBlur}
          error={formik.touched.forzaShareCode && Boolean(formik.errors.forzaShareCode)}
          helperText={formik.touched.forzaShareCode && formik.errors.forzaShareCode}
          customInput={TextField}
        />
      </Grid>
      <Grid item xs={8}>
        <Autocomplete
          onChange={(e, value) => {
            formik.setFieldValue("selectedCarId", value?.id);
          }}
          onBlur={formik.handleBlur}
          options={autocompleteOptions}
          renderInput={(params) => (
            <TextField
              {...params}
              name="selectedCarId"
              label="Car"
              error={Boolean(formik.errors.selectedCarId)}
              helperText={formik.errors.selectedCarId}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Divider flexItem variant="fullWidth">
          <Typography variant="blockTitle" sx={styles.textHeader}>
            Engine
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="engineDescription"
          label="Engine Description"
          value={formik.values.engineDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.engineDescription && Boolean(formik.errors.engineDescription)}
          helperText={formik.touched.engineDescription && formik.errors.engineDescription}
          multiline
          minRows={3}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={styles.sparePartsBlock}>
          <SparePartSelectComponent
            imageSrc={"EngineIcon.png"}
            label="Engine"
            name="engine"
            value={formik.values.engine}
            enumerator={EngineType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.engine)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"AspirationIcon.png"}
            label="Aspiration"
            name="aspiration"
            value={formik.values.aspiration}
            enumerator={AspirationType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.aspiration)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"IntakeIcon.png"}
            label="Intake"
            name="intake"
            value={formik.values.intake}
            enumerator={IntakeType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.intake)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"IgnitionIcon.png"}
            label="Ignition"
            name="ignition"
            value={formik.values.ignition}
            enumerator={IgnitionType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.ignition)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"DisplacementIcon.png"}
            label="Displacement"
            name="displacement"
            value={formik.values.displacement}
            enumerator={DisplacementType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.displacement)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"ExhaustIcon.png"}
            label="Exhaust"
            name="exhaust"
            value={formik.values.exhaust}
            enumerator={ExhaustType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.exhaust)}
            handleBlur={formik.handleBlur}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider flexItem variant="fullWidth">
          <Typography variant="blockTitle" sx={styles.textHeader}>
            Handling
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="handlingDescription"
          label="Handling Description"
          value={formik.values.handlingDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.handlingDescription && Boolean(formik.errors.handlingDescription)}
          helperText={formik.touched.handlingDescription && formik.errors.handlingDescription}
          multiline
          minRows={3}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={styles.sparePartsBlock}>
          <SparePartSelectComponent
            imageSrc={"BrakesIcon.png"}
            label="Brakes"
            name="brakes"
            value={formik.values.brakes}
            enumerator={BrakesType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.brakes)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"SuspensionIcon.png"}
            label="Suspension"
            name="suspension"
            value={formik.values.suspension}
            enumerator={SuspensionType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.suspension)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"AntiRollBarsIcon.png"}
            label="Anti-Roll Bars"
            name="antiRollBars"
            value={formik.values.antiRollBars}
            enumerator={AntiRollBarsType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.antiRollBars)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"RollCageIcon.png"}
            label="Roll Cage"
            name="rollCage"
            value={formik.values.rollCage}
            enumerator={RollCageType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.rollCage)}
            handleBlur={formik.handleBlur}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider flexItem variant="fullWidth">
          <Typography variant="blockTitle" sx={styles.textHeader}>
            Drivetrain
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="drivetrainDescription"
          label="Drivetrain Description"
          value={formik.values.drivetrainDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.drivetrainDescription && Boolean(formik.errors.drivetrainDescription)
          }
          helperText={formik.touched.drivetrainDescription && formik.errors.drivetrainDescription}
          multiline
          minRows={3}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={styles.sparePartsBlock}>
          <SparePartSelectComponent
            imageSrc={"ClutchIcon.png"}
            label="Clutch"
            name="clutch"
            value={formik.values.clutch}
            enumerator={ClutchType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.clutch)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"TransmissionIcon.png"}
            label="Transmission"
            name="transmission"
            value={formik.values.transmission}
            enumerator={TransmissionType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.transmission)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"DifferentialIcon.png"}
            label="Differential"
            name="differential"
            value={formik.values.differential}
            enumerator={DifferentialType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.differential)}
            handleBlur={formik.handleBlur}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider flexItem variant="fullWidth">
          <Typography variant="blockTitle" sx={styles.textHeader}>
            Tires
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={12}>
        <TextField
          name="tiresDescription"
          label="Tires Description"
          value={formik.values.tiresDescription}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.tiresDescription && Boolean(formik.errors.tiresDescription)}
          helperText={formik.touched.tiresDescription && formik.errors.tiresDescription}
          multiline
          minRows={3}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Box sx={styles.sparePartsBlock}>
          <SparePartSelectComponent
            imageSrc={"TiresWidthIcon.png"}
            label="Front Tires Width"
            name="frontTireWidth"
            value={formik.values.frontTireWidth}
            enumerator={TiresWidthType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.frontTireWidth)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"TiresWidthIcon.png"}
            label="Rear Tires Width"
            name="rearTireWidth"
            value={formik.values.rearTireWidth}
            enumerator={TiresWidthType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.rearTireWidth)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"FrontTrackWidthIcon.png"}
            label="Front Track Width"
            name="frontTrackWidth"
            value={formik.values.frontTrackWidth}
            enumerator={TrackWidthType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.frontTrackWidth)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"RearTrackWidthIcon.png"}
            label="Rear Track Width"
            name="rearTrackWidth"
            value={formik.values.rearTrackWidth}
            enumerator={TrackWidthType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.rearTrackWidth)}
            handleBlur={formik.handleBlur}
          />
          <SparePartSelectComponent
            imageSrc={"TiresCompoundIcon.png"}
            label="Tires Compound"
            name="compound"
            value={formik.values.compound}
            enumerator={TiresCompoundType}
            handleValueChange={formik.handleChange}
            error={Boolean(formik.errors.compound)}
            handleBlur={formik.handleBlur}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <FormButtonGroupComponent handleSubmit={formik.handleSubmit} handleCancel={handleCancel} />
      </Grid>
    </Grid>
  );
};

export default AddNewTuneFormComponent;
