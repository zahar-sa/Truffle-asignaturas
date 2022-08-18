const notas = artifacts.require('notas');

contract('notas', accounts =>{
    
    it('1. Función : Evaluar (string memory _idAlumno, uint32 _nota)',async() =>{
        
        let instance = await notas.deployed();

        const Evaluar = await instance.Evaluar('12345X',9,{from : accounts[0]});

        console.log(accounts[0]);
        console.log(Evaluar);

        const  VerNotas = await instance.VerNotas.call('12345X',{from : accounts[0]});

        console.log(VerNotas);
        assert.equal(VerNotas,9);

    });
    
    it('2.-función : Revision(string memory _idAlumno)', async() =>{
        
        let instance = await notas.deployed();

        const Revision = await instance.Revision('12345X',{from : accounts[1]});

        console.log(Revision);

        const Revision1 = await instance.Revision('02468T',{from : accounts[2]});

        console.log(Revision1);

        const Lista_revision = await instance.Lista_revision.call({from : accounts[0]});
        
        console.log(Lista_revision);

        assert.equal(Lista_revision[0],'12345X');
        assert.equal(Lista_revision[1],'02468T');

    });

    
});