import { useSearchParams } from "react-router-dom";

function TaskPage() {
    const [search_params] = useSearchParams();
    const title = search_params.get('title');
    const description = search_params.get('description');

    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default TaskPage;