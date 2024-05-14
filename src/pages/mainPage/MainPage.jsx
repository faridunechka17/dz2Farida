import About from "../../components/About/About";
import Title from "../../components/Title/Title";


function MainPage(){
    return (
        <div>
            <About info={{title: 'Farida', body: 'Tabaldieva'}}/>
            <Title title={'Hello world'}/>
        </div>

    )

}
export default MainPage