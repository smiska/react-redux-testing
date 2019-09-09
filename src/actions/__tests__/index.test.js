import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

describe('save comment', () =>{
    it('it has the correct type', () => {
        expect(saveComment().type).toEqual(SAVE_COMMENT)
    })

    it('it has the correct payload', () => {
        const TEST_COMMENT = 'test'
        expect(saveComment(TEST_COMMENT).payload).toEqual(TEST_COMMENT)
    })
})