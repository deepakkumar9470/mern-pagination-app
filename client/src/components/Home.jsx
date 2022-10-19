import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {FaEdit,FaTrash} from 'react-icons/fa'
import {deleteBank, getBanks} from '../service/api'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import {Table,TableCell,tableCellClasses,TableHead,TableRow,
TableBody,TableContainer,Paper,TablePagination} from '@mui/material'
import {styled} from '@mui/material/styles'
import {DataGrid} from '@mui/x-data-grid'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const Home = () => {
  const [banks,setBanks] = useState([])

  const [count ,setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [rowperPage, setrowperPage] = useState(5)
  const columns = [
    {
      field : 'vendorname', header: 'VENDORNAME', width : 250
    },{
      field : 'accountno', header: 'ACCOUNT NO', width : 200
    }
    ,{
      field : 'bankname', header: 'BANK NAME', width : 300
    }
    ,{
      field : 'actions', header: 'ACTIONS', width : 300
    }
  ]
  const fetchBanks = async () =>{
    try {
      const {banks,count} = await getBanks({
        page : page * 1,
        perPage : rowperPage,
      })
      console.log({banks,count})
      setBanks(banks)
      setCount(count)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    // const fetchBanks = async () =>{
    //   try {
    //     const res = await getBanks()
    //     setBanks(res.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // fetchBanks()

    
    fetchBanks()
   
  }, [])

  const handleFetch = async (e) =>{
    e.preventDefault()
   await fetchBanks()
  }

  const handleDelete =  async (id) =>{
    try {
      await deleteBank(id)
      toast.success('Bank has been deleted')
      window.location.reload('/')
    } catch (error) {
      console.log(error)
    }
  }
  
  const handleChangePage = (e,newpage) =>{
    setPage(newpage)
  }

  const handleChangeRowsPage = (e) =>{
    setrowperPage(parseInt(e.target.value, 10));
    setPage(0)
  }
  return (
       <div className='m-5 py-4' style={{width :'90%' , height: 600}}>
        <button className='btn  btn-primary mb-3' onClick={handleFetch}>Fetch Banks</button>

         {
          count ? (
            <Paper elevation={2}>
            <TableContainer sx={{maxHeigth : 400}}>
              <Table stickyHeader>
  
                <TableHead style={{width :'100%'}}>
                  <TableRow>
                    <StyledTableCell>
                       <b>Vendor</b>
                    </StyledTableCell>
                    <StyledTableCell>
                       <b>Account No</b>
                    </StyledTableCell>
                    <StyledTableCell>
                       <b>Bank</b>
                    </StyledTableCell>
                    <StyledTableCell>
                       <b>Actions</b>
                    </StyledTableCell>
  
                  </TableRow>
  
                </TableHead>

                <TableBody>

                  {banks?.map((bank,i)=>(
                    <TableRow key={bank._id} hoover>
                      <TableCell className="vendorname">{bank.vendorname}</TableCell>
                      <TableCell>{bank.accno}</TableCell>
                      <TableCell>{bank.bankname}</TableCell>
                      <TableCell>
                         <Link className='link' to={`edit/${bank._id}`}>
                          <FaEdit className='icons' color='rgb(17, 151, 192)'/>
                          </Link>
                      </TableCell>
                      <TableCell>
                      <FaTrash className='icons' color='rgb(248, 109, 85)'
                         onClick={()=>handleDelete(bank._id)}/>
                      </TableCell>

                    </TableRow>
                  ))}
                </TableBody>

              </Table> 
            </TableContainer>
              <TablePagination
                component="div"
                count={count} 
                page={page}
                rowperPage = {parseInt(rowperPage)}
                rowsPerPageOptions={[5,10,25,50,100,150,200,250,300]}
                onPageChange={handleChangePage}
                onRowsPerPageChange ={handleChangeRowsPage}
                labelRowsPerPage={
									<div className="mt-3">Rows per page</div>
								}
								labelDisplayedRows={({ from, to, count }) => (
									<div className="mt-3">
										{from}-{to} of{" "}
										{count !== -1
											? count
											: `more than ${to}`}
									</div>
								)}
              />
            
            </Paper> 
          ) : 
          (
            <p>No banks data to show!</p>
          )
         }      

       </div>
  )
}

export default Home