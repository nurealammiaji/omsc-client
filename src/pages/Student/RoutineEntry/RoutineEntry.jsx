import React, { useContext } from 'react';
import { SelectionContext } from '../../../../providers/SelectionProvider';
import { Link } from 'react-router-dom';


const RoutineEntry = () => {
    const { selection } = useContext(SelectionContext);

    if (selection) {
        console.log(selection);
    }

    return (
        <div>
            {
                (selection) ?
                    <div>
                        {/* Selected Infos */}
                        <div>
                            <p>Version: <span className='text-success'>{selection?.selectedVersion}</span>, Year: <span className='text-success'>{selection?.selectedYear}</span>, Session: <span className='text-success'>{selection?.selectedSession}</span>, Class:<span className='text-success'> {selection?.selectedClass}</span>, Section: <span className='text-success'>{selection?.selectedSection}</span>, Entry Type: <span className='text-success'>{selection?.selectedEntryType}</span></p>
                        </div>
                        <div className='divider w-[50%] mx-auto'></div>
                        {/* Entry field */}
                        <div className='w-1/2 mx-auto'>
                            {
                                (selection.selectedEntryType === "Multiple") ?
                                    <div>
                                        <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-4">
                                            <legend className="fieldset-legend text-left">Year</legend>
                                            <textarea></textarea>
                                        </fieldset>
                                    </div> :
                                    <div>
                                        <form>
                                            <input type="text" placeholder='Teacher Name' className='input w-full input-success' />
                                            <br /><br />
                                            <input type="text" placeholder='Subject Name' className='input w-full input-success' />
                                            <br /><br />
                                            <fieldset className="fieldset">
                                                {/* <legend className="fieldset-legend">Type Diary</legend> */}
                                                <textarea rows={8} className="textarea textarea-success w-full" placeholder="Type here ..."></textarea>
                                            </fieldset>
                                            <br />
                                            <button className='btn btn-primary' type='submit'>Submit</button>
                                        </form>
                                    </div>
                            }
                        </div>
                    </div> :
                    <div>
                        <h3 className='text-error text-xl'>Oops! There is no selection</h3>
                        <br />
                        <Link to={"/"} className='btn btn-primary'>Go to Home</Link>
                    </div>
            }
        </div>
    );
};

export default RoutineEntry;