import ReactLoading from 'react-loading';


const Loading = () => {
    return (
        <div className='min-h-screen grid place-items-center'>
            <ReactLoading type={"bars"} color={"#6C63FF"} height={367} width={275} />
        </div>
    );
};

export default Loading;