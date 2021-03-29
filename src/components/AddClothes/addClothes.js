import './addClothes.css';
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";




function AddClothes() {


    return (
        <div className="main-container">
            <header>
                <div className='headerText'>Style look <span className="proposals"> proposals </span> ADMIN</div>
            </header>
            <section>
            <form action="" className='form'>
                <div className='firstsection'>
                    <div className='img'>
                    </div>
                    <FormControl className='FormControl'>
                    <InputLabel className='InputLabel' htmlFor="uncontrolled-native">* Елемент гардреробу</InputLabel>
                    <NativeSelect className='NativeSelect'>
                        <option value={10}>Одяг</option>
                        <option value={20}>Взуття</option>
                        <option value={30}>Аксесуари</option>
                    </NativeSelect>
                    </FormControl>
                    <br/>
                    <FormControl>
                    <InputLabel htmlFor="uncontrolled-native">* Основний колір</InputLabel>
                    <NativeSelect className='NativeSelect'>
                        <option value={10}>Виберіть колір</option>
                        <option value={10}>Чорний</option>
                        <option value={20}>Білий</option>
                        <option value={30}>Рожевий</option>
                    </NativeSelect>
                </FormControl>
                </div>
                <div className='firstsection'>
                    <FormControl className='FormControl'>
                        <InputLabel className='InputLabel' htmlFor="uncontrolled-native">* Тип фігури</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Вкажіть тип</option>
                            <option value={20}>Взуття</option>
                            <option value={30}>Аксесуари</option>
                        </NativeSelect>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <InputLabel htmlFor="uncontrolled-native">* Категорія</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Виберіть категорію</option>
                            <option value={20}>Білий</option>
                            <option value={30}>Рожевий</option>
                        </NativeSelect>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <InputLabel htmlFor="uncontrolled-native">* Вид атрибуту</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Вкажіть вид</option>
                            <option value={20}>Білий</option>
                            <option value={30}>Рожевий</option>
                        </NativeSelect>
                    </FormControl>
                </div>
                <div className='firstsection'>
                    <FormControl className='FormControl'>
                        <InputLabel className='InputLabel' htmlFor="uncontrolled-native">Наявнсть аксесуару/малюнку</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Немає</option>
                            <option value={20}>Взуття</option>
                            <option value={30}>Аксесуари</option>
                        </NativeSelect>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <InputLabel htmlFor="uncontrolled-native">Довжина</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Не вказано</option>
                            <option value={20}>Білий</option>
                            <option value={30}>Рожевий</option>
                        </NativeSelect>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <InputLabel htmlFor="uncontrolled-native">Ширина</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Не вказано</option>
                            <option value={20}>Білий</option>
                            <option value={30}>Рожевий</option>
                        </NativeSelect>
                    </FormControl>
                    <br/>
                    <FormControl>
                        <InputLabel htmlFor="uncontrolled-native">Посадка</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Не вказано</option>
                            <option value={20}>Білий</option>
                            <option value={30}>Рожевий</option>
                        </NativeSelect>
                    </FormControl>
                    <br/>
                    <FormControl className='FormControl'>
                        <InputLabel htmlFor="uncontrolled-native">Виріз</InputLabel>
                        <NativeSelect className='NativeSelect'>
                            <option value={10}>Немає</option>
                            <option value={20}>Білий</option>
                            <option value={30}>Рожевий</option>
                        </NativeSelect>
                    </FormControl>
                </div>
            </form>
                <div className='btns'>
                    <Button className='btn1' variant="contained" color="secondary">
                        Save
                    </Button>
                    <Button className='btn2' variant="outlined" color="secondary">
                        Cancel
                    </Button>
                </div>
            </section>

        </div>
    );
}

export default AddClothes;
