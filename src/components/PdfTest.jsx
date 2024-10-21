import React,{useEffect, useState} from 'react'

const PdfTest = () => {
    const [testName, setTestName] = useState("CBC;Complete Blood Count + ESR");
    const [sampleType, setSampleType] = useState("EDTA Sample");
    const [redBloodCells, setRedBloodCells] = useState([])
    const [whiteBloodCells, setWhiteBloodCells] = useState([])

    useEffect(() => {
      setRedBloodCells([
        {
          "testDescription": "Hemoglobin",
          "value": 13.5,
          "unit": "g/dL",
          "referenceRange": "13.8-17.2 g/dL"
        },
        {
          "testDescription": "White Blood Cell Count",
          "value": 6.0,
          "unit": "x10^9/L",
          "referenceRange": "4.0-11.0 x10^9/L"
        },
        {
          "testDescription": "Platelet Count",
          "value": 250,
          "unit": "x10^9/L",
          "referenceRange": "150-450 x10^9/L"
        },
        {
          "testDescription": "Blood Glucose (Fasting)",
          "value": 95,
          "unit": "mg/dL",
          "referenceRange": "70-100 mg/dL"
        },
        {
          "testDescription": "Serum Creatinine",
          "value": 1.1,
          "unit": "mg/dL",
          "referenceRange": "0.6-1.2 mg/dL"
        }
      ]
      );

      setWhiteBloodCells([
        {
          "testDescription": "Hemoglobin",
          "value": 13.5,
          "unit": "g/dL",
          "referenceRange": "13.8-17.2 g/dL"
        },
        {
          "testDescription": "White Blood Cell Count",
          "value": 6.0,
          "unit": "x10^9/L",
          "referenceRange": "4.0-11.0 x10^9/L"
        },
        {
          "testDescription": "Platelet Count",
          "value": 250,
          "unit": "x10^9/L",
          "referenceRange": "150-450 x10^9/L"
        },
        {
          "testDescription": "Blood Glucose (Fasting)",
          "value": 95,
          "unit": "mg/dL",
          "referenceRange": "70-100 mg/dL"
        },
        {
          "testDescription": "Serum Creatinine",
          "value": 1.1,
          "unit": "mg/dL",
          "referenceRange": "0.6-1.2 mg/dL"
        },
        {
          "testDescription": "White Blood Cell Count",
          "value": 8.5,
          "unit": "x10^9/L",
          "referenceRange": "4.0-11.0 x10^9/L"
        }
      ]
      )
    }, [])
    
  return (
    <div className='m-4'>
        <h2 className='text-lg font-semibold'>Test Name :<span className='underline'>{testName}</span></h2>
        <h2 className='text-lg font-semibold'>Sample Type :<span className='underline'>{sampleType}</span></h2>
        <table class="border-collapse border border-slate-400 w-full">
            <thead>
                <tr>
                <th class="border border-slate-300 text-left">Test Description</th>
                <th class="border border-slate-300 text-left">Value(s)</th>
                <th class="border border-slate-300 text-left">Units(s)</th>
                <th class="border border-slate-300 text-left">Reference Range</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td colSpan={4}  class="border border-slate-300 font-semibold text-left">RED BLOOD CELL (ERYTHROCYTES)</td>
                </tr>
                {
                    redBloodCells.map(function(item, index){
                        return <tr>
                            <td className='border border-slate-300 text-left'>{item.testDescription}</td>
                            <td className='border border-slate-300 text-left'>{item.value}</td>
                            <td className='border border-slate-300 text-left'>{item.unit}</td>
                            <td className='border border-slate-300 text-left'>{item.referenceRange}</td>
                        </tr>
                    })
                }

                <tr>
                    <td colSpan={4}  class="border border-slate-300 font-semibold text-left">WHITE BLOOD CELL (LEUCOCYTES)</td>
                </tr>
                {
                    whiteBloodCells.map(function(item, index){
                        return <tr>
                            <td className='border border-slate-300 text-left'>{item.testDescription}</td>
                            <td className='border border-slate-300 text-left'>{item.value}</td>
                            <td className='border border-slate-300 text-left'>{item.unit}</td>
                            <td className='border border-slate-300 text-left'>{item.referenceRange}</td>
                        </tr>
                    })
                }

            </tbody>
        </table>
    </div>
  )
}

export default PdfTest