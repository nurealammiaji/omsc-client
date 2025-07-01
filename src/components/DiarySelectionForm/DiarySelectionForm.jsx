import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SelectionContext } from '../../../providers/SelectionProvider';


const DiarySelectionForm = () => {

    const { setSelection } = useContext(SelectionContext);

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedSession, setSelectedSession] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [selectedClass, setSelectedClass] = useState(null);
    const [selectedVersion, setSelectedVersion] = useState(null);
    const [selectedEntryType, setSelectedEntryType] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);

    const navigate = useNavigate();

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
        { name: "Two (EV)", value: "twoEV" },
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

    const entryTypes = [
        { name: "Single", value: "single" },
        { name: "Multiple", value: "multiple" }
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

    const handleEntryType = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setSelectedEntryType(e.target.value);
    }

    const handleSelectionForm = (e) => {
        e.preventDefault();
        const selectionSummary = {
            selectedYear,
            selectedVersion,
            selectedClass,
            selectedSession,
            selectedSection,
            selectedEntryType,
        };
        console.log(selectionSummary);
        setSelection(selectionSummary);
        navigate("/entry", { replace: true });
    }

    return (
        <div>
            <form onSubmit={handleSelectionForm} className="text-center w-full md:w-6/12 mx-auto">
                <div className='grid grid-cols-3 gap-5'>
                    {
                        (years) ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Year</legend>
                                <select onChange={handleYear} defaultValue={""} className="select select-success w-full text-center">
                                    <option value="" className="bg-gray-400">Select Year</option>
                                    {years.map((y, index) => <option key={index} value={y.name}>{y.name}</option>)}
                                </select>
                            </fieldset> : ''
                    }
                    {
                        (years && selectedYear) ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Version</legend>
                                <select defaultValue={""} onChange={handleVersion} className="select select-success w-full text-center">
                                    <option value="" className="bg-gray-400">Select Version</option>
                                    {versions.map((v, index) => <option key={index} value={v.name}>{v.name}</option>)}
                                </select>
                            </fieldset> : ''
                    }
                    {
                        (years && selectedYear && selectedVersion === "Bangla") ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Class</legend>
                                <select defaultValue={""} onChange={handleClass} className="select select-success w-full text-center">
                                    <option value="" className="bg-gray-400">Select Class</option>
                                    {classes.map((c, index) => <option key={index} value={c.name}>{c.name}</option>)}
                                </select>
                            </fieldset> : ''
                    }
                    {
                        (years && selectedYear && selectedVersion === "English") ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Class</legend>
                                <select defaultValue={""} onChange={handleClass} className="select select-success w-full text-center">
                                    <option value="" className="bg-gray-400">Select Class</option>
                                    {classesEV.map((c, index) => <option key={index} value={c.name}>{c.name}</option>)}
                                </select>
                            </fieldset> : ''
                    }
                    {
                        (years && selectedYear && selectedVersion && selectedClass) ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Session</legend>
                                <select defaultValue={""} onChange={handleSession} className="select select-success w-full text-center">
                                    <option value="" className="bg-gray-400">Select Session</option>
                                    {sessions.map((s, index) => <option key={index} value={s.name}>{s.name}</option>)}
                                </select>
                            </fieldset> : ''
                    }
                    {
                        (years && selectedYear && selectedVersion && selectedClass && selectedSession) ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Section</legend>
                                <select defaultValue={""} onChange={handleSection} className="select select-success w-full text-center">
                                    <option value="" className="bg-gray-400">Select Section</option>
                                    {sections.map((s, index) => <option key={index} value={s.name}>{s.name}</option>)}
                                </select>
                            </fieldset> : ''
                    }
                    {
                        (years && selectedYear && selectedVersion && selectedClass && selectedSession && selectedSection) ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Entry Type</legend>
                                <select defaultValue={""} onChange={handleEntryType} className="select select-success w-full text-center">
                                    <option value="" className="bg-gray-400">Select Entry Type</option>
                                    {entryTypes.map((s, index) => <option key={index} value={s.name}>{s.name}</option>)}
                                </select>
                            </fieldset> : ''
                    }
                    {
                        (years && selectedYear && selectedVersion && selectedClass && selectedSession && selectedSection && selectedEntryType) ?
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                <legend className="fieldset-legend text-left">Date</legend>
                                <input type="date" className="input input-success w-full text-center" />
                            </fieldset> : ''
                    }
                </div>
                <br />
                <div className='text-center'>
                    {
                        (years && selectedYear && selectedVersion && selectedClass && selectedSession && selectedSection && selectedEntryType) ?
                            <button type="submit" className="btn btn-soft btn-primary">Submit</button> : ""
                    }
                </div>
            </form>
        </div>
    )
}

export default DiarySelectionForm
