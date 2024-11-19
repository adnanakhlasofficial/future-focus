import ReactLoading from 'react-loading';


const Loading = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <ReactLoading type={"bars"} color={"#6C63FF"} height={667} width={375} />
        </div>
    );
};

export default Loading;