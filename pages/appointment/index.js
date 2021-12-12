import Appointment from "../../components/appointment.components/Appointment";
import Button from "../../components/Button";

export default function index() {
    return (
        <div className="flex flex-col justify-center p-4">
            <Appointment/>
            <Button name="make an appointment" />
        </div>
    )
}
