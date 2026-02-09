<div align="center">
  <img src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg" width="650" height="auto"/>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/workflows/ci/badge.svg)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Coverage Status](https://coveralls.io/repos/github/fastify/fastify/badge.svg?branch=master)](https://coveralls.io/github/fastify/fastify?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)
[![NPM version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify) [![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)

</div>
<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is comparatively.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then 

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.20.0`
* __Run:__ Mon Feb 09 2026 01:56:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polkadot                 | 1.0.0    | ✗      | 46936.8    | 20.81        | 8.37          |
| bare                     | v20.20.0 | ✗      | 46925.6    | 20.80        | 8.37          |
| kita                     | 1.1.36   | ✓      | 46653.6    | 20.90        | 8.36          |
| polka                    | 0.5.2    | ✓      | 46295.2    | 21.10        | 8.26          |
| fastify                  | 4.29.1   | ✓      | 45930.4    | 21.29        | 8.23          |
| connect                  | 3.7.0    | ✗      | 45776.0    | 21.36        | 8.16          |
| server-base              | 7.1.32   | ✗      | 45532.8    | 21.44        | 8.12          |
| rayo                     | 1.4.6    | ✓      | 45431.2    | 21.53        | 8.10          |
| h3                       | 1.15.5   | ✗      | 45273.6    | 21.59        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 45056.0    | 21.70        | 8.04          |
| 0http                    | 3.5.3    | ✓      | 44966.4    | 21.74        | 8.02          |
| h3-router                | 1.15.5   | ✓      | 44444.8    | 22.00        | 7.93          |
| connect-router           | 1.3.8    | ✓      | 43070.4    | 22.72        | 7.68          |
| restana                  | 4.9.9    | ✓      | 40743.2    | 24.05        | 7.27          |
| koa                      | 2.16.3   | ✗      | 36917.0    | 26.58        | 6.58          |
| hono                     | 4.11.9   | ✓      | 36206.6    | 27.13        | 5.94          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36178.6    | 27.15        | 6.45          |
| take-five                | 2.0.0    | ✓      | 35245.0    | 27.86        | 12.67         |
| restify                  | 11.1.0   | ✓      | 35079.8    | 27.99        | 6.32          |
| koa-router               | 12.0.1   | ✓      | 33704.8    | 29.15        | 6.01          |
| hapi                     | 21.4.4   | ✓      | 32539.6    | 30.22        | 5.80          |
| fastify-big-json         | 4.29.1   | ✓      | 11891.0    | 83.53        | 136.82        |
| express                  | 4.22.1   | ✓      | 11203.4    | 88.69        | 2.00          |
| express-with-middlewares | 4.22.1   | ✓      | 10179.4    | 97.64        | 3.79          |
| micro-route              | 2.5.0    | ✓      | N/A        | N/A          | N/A           |
| micro                    | 10.0.1   | ✗      | N/A        | N/A          | N/A           |
| microrouter              | 3.1.3    | ✓      | N/A        | N/A          | N/A           |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
