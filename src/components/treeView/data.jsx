const menusData = [
    {
        label: 'Parent 1',
        to: '/parent1',
        children: [
            {
                label: 'Child 1',
                to: '/child1',
                children: [
                    {
                        label: 'innerChild 1',
                        to: '/child1',
                        children : [
                            // {
                            //     label : "inner inner"
                            // }
                        ]
                    }
                ]
            },
            {
                label: 'Child 2',
                to: '/child2'
            },
            {
                label: 'Child 3',
                to: '/child3'
            }
        ]
    },
    {
        label: 'Parent 2',
        to: '/parent2',
        children: [
            {
                label: 'Child 1',
                to: '/child1'
            },
            {
                label: 'Child 2',
                to: '/child2'
            },
            {
                label: 'Child 3',
                to: '/child3'
            }
        ]
    },
    {
        label: 'Parent 3',
        to: '/parent3',
        children: [
            {
                label: 'Child 1',
                to: '/child1'
            },
            {
                label: 'Child 2',
                to: '/child2'
            },
            {
                label: 'Child 3',
                to: '/child3'
            }
        ]
    },
    {
        label: 'Parent 4',
        to: '/parent4',
        children: [
            {
                label: 'Child 2',
                to: '/child2'
            },
            {
                label: 'Child 3',
                to: '/child3'
            }
        ]
    }

]

export default menusData;