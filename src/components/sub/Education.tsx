import Prompt from "../const/Prompt";

const Education = () => {
    const education = [
        {
            type: "School ( k-12 )",
            institute: "Delhi Public School, Kolar Road, Bhopal",
        },
    ];

    return (
        <section>
            <div className="content m-5 md:p-5 md:m-0">
                <Prompt cmd="education" />
                {education.map((edu) => (
                    <div key={edu.institute}>
                        <h3>{edu.type}</h3>
                        <p>{edu.institute}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
