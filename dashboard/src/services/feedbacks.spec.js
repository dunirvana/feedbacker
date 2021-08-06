import mockAxios from 'axios'
import FeedbacksService from './feedbacks'

jest.mock('axios')

describe('FeedbacksService', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return all feedbacks', async () => {
    const feedback1 = {
        text: 'Feedback 1',
        id: '1234',
        type: 'IDEA',
        createAt: '1608681600000'
      }
    const feedback2 = {
        text: 'Feedback 2',
        id: '56789',
        type: 'OTHER',
        createAt: '1605225600000'
      }      
    const feedbacks = [ feedback1, feedback2 ]

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: feedbacks })
    })

    const response = await FeedbacksService(mockAxios).getAll()
    expect(response.data).toContain(feedback1)
    expect(response.data).toContain(feedback2)
    expect(response).toMatchSnapshot()
  })
  
  it('should return feedbacks summary', async () => {
    const summary = {
        all: '2',
        issue: '3',
        idea: '4',
        other: '5'
      }

    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: summary })
    })

    const response = await FeedbacksService(mockAxios).getSummary()
    expect(response.data).toHaveProperty('all')
    expect(response.data).toHaveProperty('issue')
    expect(response.data).toHaveProperty('idea')
    expect(response.data).toHaveProperty('other')
    expect(response).toMatchSnapshot()
  })  
})

