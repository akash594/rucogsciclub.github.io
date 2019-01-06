import sys
import random

def main():
    filename = raw_input("Enter filename: ")
    try:
        fin = open(filename, 'r')
    except:
        print("Sorry, the file you have entered doesn't exist")
        sys.exit(0)    

    fout = open('svg_out.txt', 'w')

    #Format <path> html tags from svg file generated by Adobe
    for line in fin:
        hex_code = get_hex()
        svg_string = '<path fill="#'+hex_code+'" d="M'
        if "polygon" in line:
            s = line.split('points="')[1]
            s2 = s.split(' ')[:-1]
            svg_string += s2[-1].split(',')[0] + ' ' + s2[-1].split(',')[1] +  'L'
            for coords in s2:
                coord = coords.split(',')
                for i in range(len(coord)):
                    svg_string += coord[i] + ' '
            svg_string = svg_string[:-1] + 'z'
            svg_string += '"/>'
            fout.write(svg_string + '\n')

def get_hex():
    r = lambda: random.randint(0,255)
    return ('%02X%02X%02X' % (r(),r(),r()))



if __name__=='__main__':
    main()