import React, { useState } from 'react'

const RoutineSelectionForm = () => {

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedVersion, setSelectedVersion] = useState(null);

    const years = [
        { name: "2024", value: "2024" },
        { name: "2025", value: "2025" }
    ];

    const classes = [
        { name: "Pre Play", value: "prePlay" },
        { name: "Play", value: "play" },
        { name: "Nursery", value: "nursery" },
        { name: "K.G", value: "kg" },
        { name: "One", value: "one" },
        { name: "Two", value: "two" },
        { name: "Three", value: "three" },
        { name: "Four", value: "four" },
        { name: "Five", value: "five" },
    ];

    const classesEV = [
        { name: "Pre Play (EV)", value: "prePlayEV" },
        { name: "Play (EV)", value: "playEV" },
        { name: "Nursery (EV)", value: "nurseryEV" },
        { name: "K.G (EV)", value: "kgEV" },
        { name: "One (EV)", value: "oneEV" },
        { name: "Two (EV)", value: "twoEV                          " },
        { name: "Three (EV)", value: "threeEV" },
        { name: "Four (EV)", value: "fourEV" },
        { name: "Five (EV)", value: "fiveEV" },
    ];

    const sessions = [
        { name: "First Term", value: "firsTerm" },
        { name: "Second Term", value: "secondTerm" },
        { name: "Mid Term", value: "midTerm" },
        { name: "Final Term", value: "finalTerm" },
    ];

    const sections = [
        { name: "A", value: "a" },
        { name: "B", value: "b" },
        { name: "C", value: "c" },
        { name: "D", value: "d" }
    ];

    const versions = [
        { name: "English", value: "english" },
        { name: "Bangla", value: "bangla" },
    ];

    const handleYear = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSelectedYear(e.target.value);
    }

    const handleClass = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSelectedClass(e.target.value);
    }

    const handleSession = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSelectedSession(e.target.value);
    }

    const handleSection = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSelectedSection(e.target.value);
    }

    const handleVersion = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSelectedVersion(e.target.value);
    }

    const handleSelectionForm = (e) => {
        e.preventDefault();
        const selectionInfo = {
            selectedYear,
            selectedVersion,
            selectedClass,
            selectedSession,
            selectedSection,
        };
        console.log(selectionInfo);
    }

    return (
        <div>
            <form onSubmit={handleSelectionForm} className="text-center w-full md:w-6/12 mx-auto">
                {
                    (years) ?
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend text-left">Year</legend>
                            <select onChange={handleYear} defaultValue={""} className="select select-success w-full">
                                <option value="" className="bg-gray-400">Select Year</option>
                                {years.map((y, index) => <option key={index} value={y.value}>{y.name}</option>)}
                            </select>
                        </fieldset> : ''
                }
                {
                    (years && selectedYear) ?
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend text-left">Version</legend>
                            <select defaultValue={""} onChange={handleVersion} className="select select-success w-full">
                                <option value="" className="bg-gray-400">Select Version</option>
                                {versions.map((v, index) => <option key={index} value={v.value}>{v.name}</option>)}
                            </select>
                        </fieldset> : ''
                }
                {
                    (years && selectedYear && selectedVersion === "bangla") ?
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend text-left">Class</legend>
                            <select defaultValue={""} onChange={handleClass} className="select select-success w-full">
                                <option value="" className="bg-gray-400">Select Class</option>
                                {classes.map((c, index) => <option key={index} value={c.value}>{c.name}</option>)}
                            </select>
                        </fieldset> : ''
                }
                {
                    (years && selectedYear && selectedVersion === "english") ?
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend text-left">Class</legend>
                            <select defaultValue={""} onChange={handleClass} className="select select-success w-full">
                                <option value="" className="bg-gray-400">Select Class</option>
                                {classesEV.map((c, index) => <option key={index} value={c.value}>{c.name}</option>)}
                            </select>
                        </fieldset> : ''
                }
                {
                    (years && selectedYear && selectedVersion && selectedClass) ?
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend text-left">Session</legend>
                            <select defaultValue={""} onChange={handleSession} className="select select-success w-full">
                                <option value="" className="bg-gray-400">Select Session</option>
                                {sessions.map((s, index) => <option key={index} value={s.value}>{s.name}</option>)}
                            </select>
                        </fieldset> : ''
                }
                {
                    (years && selectedYear && selectedVersion && selectedClass && selectedSession) ?
                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                            <legend className="fieldset-legend text-left">Section</legend>
                            <select defaultValue={""} onChange={handleSection} className="select select-success w-full">
                                <option value="" className="bg-gray-400">Select Section</option>
                                {sections.map((s, index) => <option key={index} value={s.value}>{s.name}</option>)}
                            </select>
                        </fieldset> : ''
                }
                <br />
                {
                    (years && selectedYear && selectedVersion && selectedClass && selectedSession && selectedSection) ?
                        <button type="submit" className="btn btn-soft btn-primary">Submit</button> : ""
                }
            </form>
        </div>
    )
}

export default RoutineSelectionForm
