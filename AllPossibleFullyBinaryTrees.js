//894. All Possible Full Binary Trees
// https://leetcode.com/problems/all-possible-full-binary-trees/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if(n % 2 === 0) return []
    let BT = new Map()
   
    function createHelper(n) {
        if(BT.has(n)) return BT.get(n)
        if(n === 1) return [new TreeNode()]
        
        let trees = []
        let l = n - 2
        let r = 1
        
        while(l >= 1) {
           
            let left = createHelper(l)
            let right = createHelper(r)
            
            for(let x = 0; x < left.length; x++) {
                for(let y = 0; y < right.length; y++) {
                    let rootNode = new TreeNode()
                    rootNode.left = left[x]
                    rootNode.right = right[y]
                    
                    trees.push(rootNode)
                }
            }
          
            l -= 2
            r += 2
            
        }
        if(!BT.has(n)) BT.set(n, trees)
        return trees
    }
    
    return createHelper(n)
};
