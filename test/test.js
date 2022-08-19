const notas = artifacts.require('notas');

contract('notas', accounts =>{
    
    it('1. Función : Evaluar (string memory _asignatura,string memory _idAlumno, uint32 _nota)',async() =>{
        
        let instance = await notas.deployed();

        const Evaluar = await instance.Evaluar('mat','12345X',9,{from : accounts[0]});

        console.log(accounts[0]);
        console.log(Evaluar);

        const  VerNotas = await instance.VerNotas.call('mat','12345X',{from : accounts[0]});

        console.log(VerNotas);
        assert.equal(VerNotas,9);

    });
    
    it('2.-función : Revision(string memory _asignatura,string memory _idAlumno)', async() =>{
        
        let instance = await notas.deployed();

        const Revision = await instance.Revision('mat','12345X',{from : accounts[1]});

        console.log('0'+Revision);

        const Revision1 = await instance.Revision('mat','02468T',{from : accounts[2]});

        console.log('1'+Revision1);

        const Lista_revision = await instance.Lista_revision.call('mat',{from : accounts[0]});
        
        console.log(Lista_revision);

        assert.equal(Lista_revision[0],'12345X');
        assert.equal(Lista_revision[1],'02468T');

    });

    
});