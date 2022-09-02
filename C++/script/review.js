function report(n)
{
    const tableHidden3=document.getElementById('idTableHidden3');
    tableHidden3.style.display='contents';
    const tableHidden6=document.getElementById('idTableHidden6');
    tableHidden6.style.display='none';
    var count=0;
    const preReport1=document.getElementById('idPreReport1');
    const preReport2=document.getElementById('idPreReport2');
    const preReport3=document.getElementById('idPreReport3');
    const preReport4=document.getElementById('idPreReport4');
    //************************************* ********************
    if(C1.checked===true){count++;}
    if(B2.checked===true){count++;}
    if(A3.checked===true){count++;}
    if(A4.checked===true){count++;}
    if(D5.checked===true){count++;}
    if(D6.checked===true){count++;}
    if(C7.checked===true){count++;}
    if(A8.checked===true){count++;}
    if(B9.checked===true){count++;}
    if(C10.checked===true){count++;}
    if(D11.checked===true){count++;}
    if(A12.checked===true&&B12.checked===true&&D12.checked===true&&E12.checked===true&&G12.checked===true)
    {count++;}
    if(A13.checked===true&&B13.checked===true&&D13.checked===true&&E13.checked===true&&G13.checked===true)
    {count++;}
    if(B14.checked===true){count++;}
    if(C15.checked===true){count++;}
    <!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
    preReport1.innerHTML+=count;
    preReport2.innerHTML+=n-count;
    preReport3.innerHTML+=count+"/"+n;
    if(count>=n-count)
    {
        const tableHidden1=document.getElementById('idTableHidden1');
        tableHidden1.style.display='contents';
        const tableHidden4=document.getElementById('idTableHidden4');
        tableHidden4.style.display='contents';
        preReport4.innerHTML="<center>ناجح</center> <br>يمكنك الذهب الى الدرس الثاني";
    }else 
    {
        const tableHidden2=document.getElementById('idTableHidden2');
        tableHidden2.style.display='contents';
        const tableHidden5=document.getElementById('idTableHidden5');
        tableHidden5.style.display='contents';
        preReport4.innerHTML="<center>فاشل</center> <br>كرر مراجعة الدرس الاول";
    }
}
function q(n)
            {
                if(n===1)
                {
                    const q=document.querySelector('#q1');
                    const c=document.querySelector('#c1');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===2)
                {
                    const q=document.querySelector('#q2');
                    const c=document.querySelector('#B2');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===3)
                {
                    const q=document.querySelector('#q3');
                    const c=document.querySelector('#A3');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===4)
                {
                    const q=document.querySelector('#q4');
                    const c=document.querySelector('#A4');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===5)
                {
                    const q=document.querySelector('#q5');
                    const c=document.querySelector('#D5');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===6)
                {
                    const q=document.querySelector('#q6');
                    const c=document.querySelector('#D6');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===7)
                {
                    const q=document.querySelector('#q7');
                    const c=document.querySelector('#C7');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===8)
                {
                    const q=document.querySelector('#q8');
                    const c=document.querySelector('#A8');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===9)
                {
                    const q=document.querySelector('#q9');
                    const c=document.querySelector('#B9');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===10)
                {
                    const q=document.querySelector('#q10');
                    const c=document.querySelector('#C10');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===11)
                {
                    const q=document.querySelector('#q11');
                    const c=document.querySelector('#D11');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===12)
                {
                    const q=document.querySelector('#q12');
                    const A=document.querySelector('#A12');
                    const B=document.querySelector('#B12');
                    const C=document.querySelector('#C12');
                    const D=document.querySelector('#D12');
                    const E=document.querySelector('#E12');
                    const F=document.querySelector('#F12');
                    const G=document.querySelector('#G12');
                    const H=document.querySelector('#H12');
                    if(A.checked==true&&B.checked==true&&C.checked==false&&D.checked==true&&E.checked==true&&F.checked==false&&G.checked==true&&H.checked==false)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===13)
                {
                    const q=document.querySelector('#q13');
                    const A=document.querySelector('#A13');
                    const B=document.querySelector('#B13');
                    const C=document.querySelector('#C13');
                    const D=document.querySelector('#D13');
                    const E=document.querySelector('#E13');
                    const F=document.querySelector('#F13');
                    const G=document.querySelector('#G13');
                    const H=document.querySelector('#H13');
                    if(A.checked==true&&B.checked==true&&C.checked==false&&D.checked==true&&E.checked==true&&F.checked==false&&G.checked==true&&H.checked==false)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===14)
                {
                    const q=document.querySelector('#q14');
                    const c=document.querySelector('#B14');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }else if(n===15)
                {
                    const q=document.querySelector('#q15');
                    const c=document.querySelector('#c15');
                    if(c.checked===true)
                    {
                        q.checked=true;
                    }else 
                    {
                        q.checked=false;
                    }
                }
                
            }
            function result(n){
                if(n===1)
                {
                    const tableHidden=document.getElementById('idTableHidden-q1');
                    tableHidden.style.display='contents';
                    /*const source=document.getElementById('HIDDEN-q1');
                    const source1=document.getElementById('HIDDEN1-q1');
                    const textContentOutput =document.getElementById('textContentOutput-q1');
                    const textContentOutput1 =document.getElementById('textContentOutput1-q1');
                    //textContentOutput.value=source.textContent;
                    textContentOutput.innerHTML=source.textContent;
                    textContentOutput1.innerHTML=source1.textContent;*/
                }else if(n===2)
                {
                    const tableHidden=document.getElementById('idTableHidden-q2');
                    tableHidden.style.display='contents';
                    //*****************************************************
                }else if(n===3)
                {
                    const tableHidden=document.getElementById('idTableHidden-q3');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===4)
                {
                    const tableHidden=document.getElementById('idTableHidden-q4');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===5)
                {
                    const tableHidden=document.getElementById('idTableHidden-q5');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===6)
                {
                    const tableHidden=document.getElementById('idTableHidden-q6');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===7)
                {
                    const tableHidden=document.getElementById('idTableHidden-q7');
                    tableHidden.style.display='contents';
                }else if(n===8)
                {
                    const tableHidden=document.getElementById('idTableHidden-q8');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===9)
                {
                    const tableHidden=document.getElementById('idTableHidden-q9');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===10)
                {
                    const tableHidden=document.getElementById('idTableHidden-q10');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===11)
                {
                    const tableHidden=document.getElementById('idTableHidden-q11');
                    tableHidden.style.display='contents';
                    //***************************************************
                }else if(n===12)
                {
                    const tableHidden=document.getElementById('idTableHidden-q12');
                    tableHidden.style.display='contents';
                    //*****************************************************
                }else if(n===13)
                {
                    const tableHidden=document.getElementById('idTableHidden-q13');
                    tableHidden.style.display='contents';
                }else if(n===14)
                {
                    const centerHidden=document.getElementById('idCenterHidden14');
                    centerHidden.style.display='contents';
                }else if(n===15)
                {
                    const tableHidden=document.getElementById('idTableHidden-q15');
                    tableHidden.style.display='contents';
                    //***************************************************
                }
            }