import { useState } from 'react';
import { updateQueue } from '../services/queueService';

const Receptionist = () => {
    const [queueId, setQueueId] = useState(1); // Default to Doctor ID 1
    const [tokenNumber, setTokenNumber] = useState(0);

    const handleUpdate = async () => {
        try {
            await updateQueue(queueId, tokenNumber);
            alert(`✅ Success! Token updated to ${tokenNumber}`);
        } catch (error) {
            alert("❌ Error: Is the Backend running?");
            console.error(error);
        }
    };

    return (
        <div className="card shadow p-4" style={{ maxWidth: '500px', margin: 'auto' }}>
            <h2 className="text-primary text-center">👩‍💼 Receptionist Panel</h2>
            <hr />
            
            <div className="mb-3">
                <label className="form-label">Doctor ID:</label>
                <input type="number" className="form-control" value={queueId} onChange={(e) => setQueueId(e.target.value)} />
            </div>

            <div className="mb-3">
                <label className="form-label">Set New Token Number:</label>
                <input type="number" className="form-control" value={tokenNumber} onChange={(e) => setTokenNumber(e.target.value)} />
            </div>

            <button className="btn btn-success w-100" onClick={handleUpdate}>
                Update Queue 🚀
            </button>
        </div>
    );
};

export default Receptionist;