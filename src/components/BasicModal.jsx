import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCadUser = () => {
    window.location.href = '/caduser'
  };


  return (
    <div>
        <Button onClick={handleOpen} className="text-black"><i class="fa-solid fa-user pr-1"></i>Login</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style} className="relative">
            <form className="flex flex-col w-full items-center gap-6">
                <h1 className="text-xl font-bold text-black ">ACESSE SUA CONTA</h1>
                <div className="w-10/12 flex flex-col gap-3">
                    <input 
                        type="text" 
                        placeholder="Login"  
                        // value={credentials.login} 
                        // onChange={(e) => setCredentials({ ...credentials, login: e.target.value })} 
                        className="w-full h-10 pl-4 placeholder:text-gray-400 bg-gray-100" 
                        required
                    />

                    <input 
                        type="password" 
                        placeholder="Senha"
                        // value={credentials.senha} 
                        // onChange={(e) => setCredentials({ ...credentials, senha: e.target.value })}
                        className="w-full h-10 pl-4 placeholder:text-gray-400 bg-gray-100" 
                        required
                    />
                </div>
                <div className="w-10/12 flex flex-col items-center justify-between gap-2">   
                    <button 
                        type="submit" 
                        className="w-6/12 h-10 bg-blue-400 text-white"
                    >
                    Acessar
                    </button>
                    <button 
                      onClick={handleCadUser}
                      className="w-6/12  text-sm text-black"
                      >
                      cadastrar
                      </button>
                </div>
                <div className="flex justify-center items-center w-10/12">
                      <a href="#" className="text-sm  text-black">esqueceu sua senha?</a>                     
                </div>
            </form>
            <button    
                onClick={handleClose}                   
                className="w-10 h-10 text-black absolute top-0 right-0"
                >
                <i className="fa-solid fa-xmark hover:bg-gray-400 p-2 delay-150 transition-all rounded-sm"></i>
            </button>
            <p className="absolute bottom-1 right-2 text-gray-300">v1.0</p>
        </Box>
      </Modal>
    </div>
  );
}
